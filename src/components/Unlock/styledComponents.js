// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  height: 100vh;
  background-size: size;
`

export const Heading = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #e2e8f0;
  margin-bottom: 38px;
`

export const ButtonLock = styled.button`
  margin-top: 38px;
  height: 36px;
  width: 78px;
  background-color: #06b6d4;
  color: #ffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`
