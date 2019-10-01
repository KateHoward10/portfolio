import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, TextContainer, Image } from "./styles"
import me from "../../images/picture-of-me.jpg"

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)

	return (
		<Container>
			<Image src={me} alt="Me" />
			<TextContainer>
				<h1>{data.site.siteMetadata.author}</h1>
				<h3>
					I am a front end developer based in Bristol, working mostly with React
					and React Native. Here is some of my work.
				</h3>
			</TextContainer>
		</Container>
	)
}

export default Header
