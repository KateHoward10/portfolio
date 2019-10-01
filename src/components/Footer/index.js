import React from "react"
import ComingSoon from "../ComingSoon"
import {
	Container,
	Text,
	InputContainer,
	Input,
	TextInput,
	ButtonContainer,
	Button,
} from "./styles"

const Footer = React.forwardRef((props, ref) => (
	<Container ref={ref}>
		<ComingSoon />
		<Text>Send me a message here</Text>
		<InputContainer>
			<Input placeholder="Name" />
			<Input placeholder="Email" />
		</InputContainer>
		<InputContainer>
			<TextInput placeholder="Message" />
		</InputContainer>
		<ButtonContainer>
			<Button>Submit</Button>
		</ButtonContainer>
	</Container>
))

export default Footer
