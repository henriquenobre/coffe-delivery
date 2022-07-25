import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`

export const PresentationContainer = styled.div`
  display: flex;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 48px;
    color: ${(props) => props.theme['base-title']};
  }
  h3 {
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 2rem;
  color: ${(props) => props.theme['base-text']};
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CoffesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 2.5rem;
`
export const CardCoffeContainer = styled.div`
  width: 270px;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    margin-top: -2rem;
  }
  span {
    margin-top: 1rem;
    padding: 5px;
    border-radius: 50px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    font-size: 13px;
    line-height: 130%;
  }
  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 20px;
  }
  p {
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    font-size: 14px;
  }
  div {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    img {
      margin-top: 0;
      cursor: pointer;
    }
    span {
      background: ${(props) => props.theme['base-card']};
      color: ${(props) => props.theme['base-text']};
      font-weight: 700;
      font-size: 24px;
      margin-top: 0;
      padding: 0;
    }
  }
`

export const AddDeleteCoffe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 10px;
  padding: 5px;
  margin-top: 0 !important;
  button {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['purple-dark']};
    border: none;
    margin-top: 0 !important;
    cursor: pointer;
    font-size: 24px;
  }
  span {
    background: ${(props) => props.theme['base-button']} !important;
  }
`
