import React, { useState } from "react"
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
import me from "../../images/picture-of-me.jpg"

const Header = () => {
	const [darkMode, setDarkMode] = useState(false)
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
			<ToggleContainer>
				<span role="img" aria-label="sun">
					🌞
				</span>
				<Toggle darkMode={darkMode}>
					<Hidden
						type="checkbox"
						onChange={e => setDarkMode(e.target.checked)}
					/>
					<Slider darkMode={darkMode} />
				</Toggle>
				<span role="img" aria-label="moon">
					🌙
				</span>
			</ToggleContainer>
		</Container>
	)
}

export default Header
