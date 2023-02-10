import expressoTradicional from '../assets/coffees/expresso-tradicional.png'
import expressoAmericano from '../assets/coffees/expresso-americano.png'
import expressoCremoso from '../assets/coffees/expresso-cremoso.png'
import expressoGelado from '../assets/coffees/expresso-gelado.png'
import cafeComLeite from '../assets/coffees/cafe-com-leite.png'
import latte from '../assets/coffees/latte.png'
import capuccino from '../assets/coffees/capuccino.png'
import mocaccino from '../assets/coffees/mocaccino.png'
import macchiato from '../assets/coffees/macchiato.png'
import chocolateQuente from '../assets/coffees/chocolate-quente.png'
import cubano from '../assets/coffees/cubano.png'
import havaiano from '../assets/coffees/havaiano.png'
import irlandes from '../assets/coffees/irlandes.png'
import arabe from '../assets/coffees/arabe.png'

export interface CoffeeType {
  id: number
  image: string
  name: string
  description: string
  price: number
  categories: string[]
}

export const coffeeListData: CoffeeType[] = [
  {
    id: 1,
    image: expressoTradicional,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 4.9,
    categories: ['Tradicional'],
  },
  {
    id: 2,
    image: expressoAmericano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 4.9,
    categories: ['Tradicional'],
  },
  {
    id: 3,
    image: expressoCremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 7.9,
    categories: ['Tradicional'],
  },
  {
    id: 4,
    image: expressoGelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 6.9,
    categories: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    image: cafeComLeite,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 7.9,
    categories: ['Tradicional', 'Com Leite'],
  },
  {
    id: 6,
    image: latte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 8.9,
    categories: ['Tradicional', 'Com Leite'],
  },
  {
    id: 7,
    image: capuccino,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 8.9,
    categories: ['Tradicional', 'Com Leite'],
  },
  {
    id: 8,
    image: macchiato,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 7.9,
    categories: ['Tradicional', 'Com Leite'],
  },
  {
    id: 9,
    image: mocaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    categories: ['Tradicional', 'Com Leite'],
  },
  {
    id: 10,
    image: chocolateQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    categories: ['Especial', 'Com Leite'],
  },
  {
    id: 11,
    image: cubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    categories: ['Especial', 'Alcóolico', 'Gelado'],
  },
  {
    id: 12,
    image: havaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 7,
    categories: ['Especial'],
  },
  {
    id: 13,
    image: arabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 7,
    categories: ['Especial'],
  },
  {
    id: 14,
    image: irlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 7,
    categories: ['Tradicional', 'Alcóolico'],
  },
]
