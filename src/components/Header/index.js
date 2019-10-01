import React from "react"
import { Container, TextContainer, Image } from "./styles"
import me from "../../images/picture-of-me.jpg"

const Header = () => {
	return (
		<Container>
			<Image src={me} alt="Me" />
			<TextContainer>
				<h1>Kate L. Howard</h1>
				<p>
					I am a front end developer based in Bristol, working mostly with React
					and React Native. Here is some of my work.
				</p>
			</TextContainer>
		</Container>
	)
}

export default Header
