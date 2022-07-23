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
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
