import {
  ActionContainer,
  CartContainer,
  HeaderContainer,
  LocationContainer,
} from './style'
import Logo from '../../assets/logo.svg'
import locationIcon from '../../assets/location.svg'
import CartIcon from '../../assets/cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <ActionContainer>
        <LocationContainer>
          <img src={locationIcon} alt="" />
          <span>Montes Claros</span>
        </LocationContainer>
        <CartContainer>
          <img src={CartIcon} alt="" />
        </CartContainer>
      </ActionContainer>
    </HeaderContainer>
  )
}
