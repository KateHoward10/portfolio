import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
	Container,
	TextContainer,
	Image,
	Intro,
	ToggleContainer,
	Toggle,
	Hidden,
	Slider,
} from "./styles"
import { FaSun, FaMoon } from "react-icons/fa"

const Header = ({ darkMode, setDarkMode }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
					intro
				}
			}
			me: file(relativePath: { eq: "images/picture-of-me.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<Container>
			<TextContainer darkMode={darkMode}>
				<Image fluid={data.me.childImageSharp.fluid} alt="Me" />
				<Intro>
					<h1>{data.site.siteMetadata.author}</h1>
					<p>{data.site.siteMetadata.intro}</p>
				</Intro>
			</TextContainer>
			<ToggleContainer>
				<FaSun color="gold" />
				<Toggle darkMode={darkMode}>
					<Hidden
						type="checkbox"
						onChange={e => setDarkMode(e.target.checked)}
					/>
					<Slider darkMode={darkMode} />
				</Toggle>
				<FaMoon color="gold" />
			</ToggleContainer>
		</Container>
	)
}

export default Header
