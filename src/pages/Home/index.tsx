import {
  HomeContainer,
  IconsContainer,
  PresentationContainer,
  TitleContainer,
} from './style'
import CoffeHome from '../../assets/coffehome.svg'
import CartIcon from '../../assets/cartCircle.svg'
import BoxIcon from '../../assets/box.svg'
import TimerIcon from '../../assets/timer.svg'
import CoffePurple from '../../assets/coffeIcon.svg'

export function Home() {
  return (
    <HomeContainer>
      <PresentationContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <IconsContainer>
            <div>
              <img src={CartIcon} alt="" />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <img src={BoxIcon} alt="" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <img src={TimerIcon} alt="" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <img src={CoffePurple} alt="" />
              <span>O café chega fresquinho até você</span>
            </div>
          </IconsContainer>
        </TitleContainer>
        <img src={CoffeHome} alt="" />
      </PresentationContainer>
    </HomeContainer>
  )
}
