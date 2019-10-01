import React from "react"
import { Container, Emoji, Text } from "./styles"

const ComingSoon = () => {
	return (
		<Container>
			<Emoji role="img" aria-label="hourglass">
				⏳
			</Emoji>
			<Text>Coming soon!</Text>
		</Container>
	)
}

export default ComingSoon
