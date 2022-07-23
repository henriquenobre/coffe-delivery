import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`

export const ActionContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  height: 38px;
  padding: 8px;
  color: ${(props) => props.theme['purple-dark']};
`

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  height: 38px;
  padding: 8px;
  cursor: pointer;
`
