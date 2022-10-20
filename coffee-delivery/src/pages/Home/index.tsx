import { HomeContainer } from './styles'

import { CoffeeList } from '../Components/CoffeeList'
import { Intro } from '../Components/Intro/index'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
