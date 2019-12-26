import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
	Container,
	TextContainer,
	Image,
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
			<Image fluid={data.me.childImageSharp.fluid} alt="Me" />
			<TextContainer darkMode={darkMode}>
				<h1>{data.site.siteMetadata.author}</h1>
				<h3>{data.site.siteMetadata.intro}</h3>
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
