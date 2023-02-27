import { useState } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { stripe } from './../../lib/stripe'
import Stripe from 'stripe'
import axios from 'axios'

import { priceFormatter } from '@/src/utils/formatter'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'

interface ProductProps {
  product: {
    id: string
    defaultPriceId: string
    name: string
    imageUrl: string
    price: string
    description: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  // const router = useRouter()
  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      // router.push('/checkout') // para rotas internas (da propria aplicação)

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl // rotas externas (fora da aplicação)
    } catch (err) {
      // Conectar uma ferramenta de observabilidade (Datadog | Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao Checkout')
    }
  }

  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <ProductContainer>
        <SkeletonTheme
          borderRadius={8}
          width={528}
          height={656}
          baseColor="#202020"
          highlightColor="#444"
        >
          {<Skeleton /> || (
            <Image src={product.imageUrl} width={520} height={480} alt="" />
          )}
        </SkeletonTheme>
        <ProductDetails>
          <SkeletonTheme
            width={508}
            height={38}
            baseColor="#202020"
            highlightColor="#444"
          >
            <h1>{<Skeleton /> || product.name}</h1>
            <span>{<Skeleton /> || product.price}</span>
          </SkeletonTheme>
          <SkeletonTheme
            width={508}
            height={200}
            baseColor="#202020"
            highlightColor="#444"
          >
            <p>{<Skeleton /> || product.description}</p>
          </SkeletonTheme>
          <button type="button" disabled={isFallback}>
            Comprar Agora
          </button>
        </ProductDetails>
      </ProductContainer>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} | Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyButton}
          >
            Comprar Agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        defaultPriceId: price.id,
        name: product.name,
        imageUrl: product.images[0],
        price: priceFormatter.format(price.unit_amount! / 100),
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1hr
  }
}
