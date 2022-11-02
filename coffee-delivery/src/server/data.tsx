import { v4 as uuid } from 'uuid'

import chocolateQuente from '../assets/CoffeeImages/chocolate-quente.svg'
import expressoCremoso from '../assets/CoffeeImages/expresso-cremoso.svg'
import cafeLeite from '../assets/CoffeeImages/cafe-com-leite.svg'
import cafeGelado from '../assets/CoffeeImages/cafe-gelado.svg'
import americano from '../assets/CoffeeImages/americano.svg'
import capuccino from '../assets/CoffeeImages/capuccino.svg'
import macchiato from '../assets/CoffeeImages/macchiato.svg'
import mocaccino from '../assets/CoffeeImages/mocaccino.svg'
import irlandes from '../assets/CoffeeImages/irlandes.svg'
import havaiano from '../assets/CoffeeImages/havaiano.svg'
import expresso from '../assets/CoffeeImages/expresso.svg'
import cubano from '../assets/CoffeeImages/cubano.svg'
import latte from '../assets/CoffeeImages/latte.svg'
import arabe from '../assets/CoffeeImages/arabe.svg'

const id = uuid()

export const coffees = [
  {
    id,
    imgUrl: expresso,
    labels: ['tradicional'],
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id,
    imgUrl: americano,
    labels: ['tradicional'],
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id,
    imgUrl: expressoCremoso,
    labels: ['tradicional'],
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id,
    imgUrl: cafeGelado,
    labels: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id,
    imgUrl: cafeLeite,
    labels: ['tradicional', 'comleite'],
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id,
    imgUrl: latte,
    labels: ['tradicional', 'comleite'],
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id,
    imgUrl: capuccino,
    labels: ['tradicional', 'comleite'],
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id,
    imgUrl: macchiato,
    labels: ['tradicional', 'comleite'],
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id,
    imgUrl: mocaccino,
    labels: ['tradicional', 'comleite'],
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id,
    imgUrl: chocolateQuente,
    labels: ['tradicional', 'comleite'],
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id,
    imgUrl: cubano,
    labels: ['especial', 'alcoolico', 'gelado'],
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id,
    imgUrl: havaiano,
    labels: ['especial'],
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id,
    imgUrl: arabe,
    labels: ['especial'],
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id,
    imgUrl: irlandes,
    labels: ['especial', 'alcoolico'],
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
