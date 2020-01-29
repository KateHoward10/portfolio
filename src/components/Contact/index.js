import React, { useState } from "react"
import {
	Container,
	Text,
	InputContainer,
	Input,
	TextInput,
	ButtonContainer,
	Button,
} from "./styles"

const Contact = React.forwardRef((props, ref) => {
	const [submitted, toggleSubmitted] = useState(false)

	return (
		<Container ref={ref}>
			{submitted ? (
				<Text>Thanks! Your message has been sent.</Text>
			) : (
				<React.Fragment>
					<Text>Send me a message here</Text>
					<form
						name="contact"
						method="post"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						onSubmit={() => toggleSubmitted(true)}
					>
						<input type="hidden" name="form-name" value="contact" />
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
				</React.Fragment>
			)}
		</Container>
	)
})

export default Contact
