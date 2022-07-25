import {
  AddDeleteCoffe,
  CardCoffeContainer,
  CoffesContainer,
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
import CartPurtple from '../../assets/cartPurple.svg'
import CoffeShop from '../../assets/coffeShop.svg'
import { useState } from 'react'

export function Home() {
  const [cart, setCart] = useState(1)

  function addCoffe() {
    setCart(cart + 1)
  }
  function deleteCoffe() {
    setCart(cart - 1)
  }
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
      <h2>Nossos cafés</h2>
      <CoffesContainer>
        <CardCoffeContainer>
          <img src={CoffeShop} alt="" />
          <span>TRADICIONAL</span>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div>
            <span>R$ 9,90</span>
            <AddDeleteCoffe>
              <button onClick={deleteCoffe}>-</button>
              <span>{cart}</span>
              <button onClick={addCoffe}>+</button>
            </AddDeleteCoffe>
            <img src={CartPurtple} alt="" />
          </div>
        </CardCoffeContainer>
        <CardCoffeContainer>
          <img src={CoffeShop} alt="" />
          <span>TRADICIONAL</span>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div>
            <span>R$ 9,90</span>
            <AddDeleteCoffe>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </AddDeleteCoffe>
            <img src={CartPurtple} alt="" />
          </div>
        </CardCoffeContainer>
        <CardCoffeContainer>
          <img src={CoffeShop} alt="" />
          <span>TRADICIONAL</span>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div>
            <span>R$ 9,90</span>
            <AddDeleteCoffe>
              <button onClick={() => setCart(cart - 1)}>-</button>
              <span>1</span>
              <button onClick={() => setCart(cart + 1)}>+</button>
            </AddDeleteCoffe>
            <img src={CartPurtple} alt="" />
          </div>
        </CardCoffeContainer>
        <CardCoffeContainer>
          <img src={CoffeShop} alt="" />
          <span>TRADICIONAL</span>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div>
            <span>R$ 9,90</span>
            <AddDeleteCoffe>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </AddDeleteCoffe>
            <img src={CartPurtple} alt="" />
          </div>
        </CardCoffeContainer>
      </CoffesContainer>
    </HomeContainer>
  )
}
