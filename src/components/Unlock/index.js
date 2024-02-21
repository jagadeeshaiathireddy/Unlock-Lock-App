// Write your code here
import {useState} from 'react'

import {AppContainer, Heading, ButtonLock} from './styledComponents'

const Unlock = () => {
  const [name, setName] = useState(false)
  const [image, setImage] = useState(false)
  const [btnText, setButtonText] = useState(false)

  const onClickButton = () => {
    setName(prevState => !prevState)
    setImage(prevState => !prevState)
    setButtonText(prevState => !prevState)
  }

  return (
    <AppContainer>
      {image ? (
        <img
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
          width="128"
          height="128"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
          width="128"
          height="128"
        />
      )}
      <Heading>
        {name ? 'Your Device is Unlocked' : 'Your Device is Locked'}
      </Heading>
      <ButtonLock onClick={onClickButton} type="button">
        {btnText ? 'Lock' : 'Unlock'}
      </ButtonLock>
    </AppContainer>
  )
}

export default Unlock
