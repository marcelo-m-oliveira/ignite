import type { AppProps } from 'next/app'
import Image from 'next/image'

import { Container, Header } from '../styles/pages/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import Link from 'next/link'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        {pageProps.product && <Link href={'/'}>Voltar ao catálogo</Link>}
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
