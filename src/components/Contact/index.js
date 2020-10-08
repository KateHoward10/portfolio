import React from "react"
import {
  Container,
  FormContainer,
  Text,
  InputContainer,
  Input,
  TextInput,
  ButtonContainer,
  Button,
} from "./styles"

const Contact = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <FormContainer>
        <Text>Send me a message here</Text>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
            aria-label="contact"
          />
          <InputContainer>
            <Input name="name" placeholder="Name" required />
            <Input name="email" placeholder="Email" type="email" required />
          </InputContainer>
          <InputContainer>
            <TextInput name="message" placeholder="Message" required />
          </InputContainer>
          <ButtonContainer>
            <Button type="submit">Send</Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Container>
  )
})

export default Contact
