import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  background-color: #011e4c;
  width: 100%;
`

export const FormContainer = styled.div`
  max-width: 980px;
  margin: auto;
  padding: 4vw 6vw;
`

export const Text = styled.p`
  margin: 10px;
  color: #fff;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 540px) {
    flex-direction: row;
  }
`

export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  flex: 0.5;
  font-family: monospace, sans-serif;
`

export const TextInput = styled.textarea`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  flex: 1;
  height: 10vw;
  font-family: monospace, sans-serif;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 20px;
  border: none;
  background: deepskyblue;
  color: #fff;
  font-size: 16px;
  font-family: monospace, sans-serif;
  cursor: pointer;
  @media screen and (min-width: 500px) {
    width: initial;
  }
`
