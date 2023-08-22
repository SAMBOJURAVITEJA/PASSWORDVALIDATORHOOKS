import styled from 'styled-components'

export const TotalPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-family: 'Roboto';
  height: 100vh;
  background-size: cover;
  background-image: linear-gradient(to bottom, #24263c, #383a4e, #475569);
`

export const PasswordContainer = styled.div`
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  padding-bottom: 90px;
  background-color: #434451;
  background-size: cover;
`

export const Heading = styled.h1`
  color: #edeeff;
  font-weight: bolder;
  font-family: 'Roboto';
  text-align: center;
  font-size: 30px;
`

export const Para = styled.p`
  color: #edeeff;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
  font-size: 10px;
`

export const Input = styled.input`
  padding: 5px;
`

export const Warning = styled(Para)`
  color: red;
  text-align: left;
  font-weight: bolder;
`
