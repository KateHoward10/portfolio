import React from "react"
import { Container, Emoji, Text } from "./styles"

const ComingSoon = ({ children }) => {
	return (
		<Container>
			<Emoji role="img" aria-label="hourglass">
				⏳
			</Emoji>
			<Text>Coming soon!</Text>
			{children && <Text>{children}</Text>}
		</Container>
	)
}

export default ComingSoon
