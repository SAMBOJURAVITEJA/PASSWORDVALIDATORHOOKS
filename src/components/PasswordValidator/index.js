import {useState} from 'react'
import {
  TotalPasswordContainer,
  PasswordContainer,
  Heading,
  Para,
  Input,
  Warning,
} from './styledComponents'

const PasswordValidator = () => {
  const [condition, setterFunction] = useState(true)
  const [information, InformationFunction] = useState('')
  const change = event => {
    if (event.target.value.length < 8) {
      setterFunction(true)
      InformationFunction(event.target.value)
    } else {
      setterFunction(false)
      InformationFunction(event.target.value)
    }
  }

  return (
    <TotalPasswordContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input onChange={change} value={information} type="password" />
        {condition && (
          <Warning>Your password must be at least 8 characters</Warning>
        )}
      </PasswordContainer>
    </TotalPasswordContainer>
  )
}

export default PasswordValidator
