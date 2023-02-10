import { CoffeeList } from './components/CoffeeList'
import { HomeIntro } from './components/HomeIntro'
import { HomeContent } from './styles'

export function Home() {
  return (
    <HomeContent>
      <HomeIntro />
      <CoffeeList />
    </HomeContent>
  )
}
