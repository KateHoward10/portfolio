import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaLaptopCode, FaInfoCircle, FaEnvelope } from "react-icons/fa"
import {
	Container,
	TitleContainer,
	Title,
	MenuIcon,
	Bar,
	LinkContainer,
	Link,
} from "./styles"

const Menu = React.forwardRef(
	(
		{
			darkMode,
			fromTop,
			scrollToTop,
			scrollToProjects,
			scrollToInfo,
			scrollToContact,
		},
		ref
	) => {
		const [menuOpen, toggleMenuOpen] = useState(false)
		const data = useStaticQuery(graphql`
			query {
				site {
					siteMetadata {
						author
					}
				}
			}
		`)

		useEffect(() => {
			if (fromTop < 100) toggleMenuOpen(false)
		}, [fromTop, toggleMenuOpen])

		return (
			<Container
				ref={ref}
				fromTop={fromTop}
				menuHeight={ref && ref.current ? ref.current.offsetHeight : 0}
			>
				<TitleContainer>
					<Title onClick={scrollToTop} fromTop={fromTop}>
						{data.site.siteMetadata.author}
					</Title>
				</TitleContainer>
				<MenuIcon onClick={() => toggleMenuOpen(!menuOpen)}>
					{Array.from([0, 1, 2], index => (
						<Bar
							key={index}
							index={index}
							fromTop={fromTop}
							menuOpen={menuOpen}
						/>
					))}
				</MenuIcon>
				<LinkContainer
					menuOpen={menuOpen}
					menuHeight={ref && ref.current ? ref.current.offsetHeight : 0}
					fromTop={fromTop}
				>
					<Link
						menuOpen={menuOpen}
						onClick={scrollToProjects}
						fromTop={fromTop}
						darkMode={darkMode}
					>
						<FaLaptopCode /> Projects
					</Link>
					<Link
						menuOpen={menuOpen}
						onClick={scrollToInfo}
						fromTop={fromTop}
						darkMode={darkMode}
					>
						<FaInfoCircle /> Info
					</Link>
					<Link
						menuOpen={menuOpen}
						onClick={scrollToContact}
						fromTop={fromTop}
						darkMode={darkMode}
					>
						<FaEnvelope /> Contact
					</Link>
				</LinkContainer>
			</Container>
		)
	}
)

export default Menu
