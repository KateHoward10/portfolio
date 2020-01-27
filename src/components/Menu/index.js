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
			projectsOffset,
			infoOffset,
			contactOffset,
			scrollPosition,
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
		const position =
			scrollPosition + (ref.current ? ref.current.offsetHeight : 0)

		function scroll(offset) {
			if (window) window.scroll(0, offset)
			toggleMenuOpen(false)
		}

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
					<Title onClick={() => window.scroll(0, 0)} fromTop={fromTop}>
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
						onClick={() => scroll(projectsOffset)}
						fromTop={fromTop}
						darkMode={darkMode}
						active={projectsOffset <= position && position < infoOffset}
					>
						<FaLaptopCode /> Projects
					</Link>
					<Link
						menuOpen={menuOpen}
						onClick={() => scroll(infoOffset)}
						fromTop={fromTop}
						darkMode={darkMode}
						active={
							infoOffset <= position &&
							position < contactOffset &&
							window.innerHeight + window.pageYOffset <
								document.body.offsetHeight
						}
					>
						<FaInfoCircle /> Info
					</Link>
					<Link
						menuOpen={menuOpen}
						onClick={() => scroll(contactOffset)}
						fromTop={fromTop}
						darkMode={darkMode}
						active={
							contactOffset <= position ||
							window.innerHeight + window.pageYOffset >=
								document.body.offsetHeight
						}
					>
						<FaEnvelope /> Contact
					</Link>
				</LinkContainer>
			</Container>
		)
	}
)

export default Menu
