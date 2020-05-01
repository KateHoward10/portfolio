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
			fromTop,
			projectsOffset,
			infoOffset,
			contactOffset,
			activeSection,
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
					<Title onClick={() => scroll(0)} fromTop={fromTop}>
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
						active={activeSection === "Projects"}
					>
						<FaLaptopCode /> Projects
					</Link>
					<Link
						menuOpen={menuOpen}
						onClick={() => scroll(infoOffset)}
						fromTop={fromTop}
						active={activeSection === "Info"}
					>
						<FaInfoCircle /> Info
					</Link>
					<Link
						menuOpen={menuOpen}
						onClick={() => scroll(contactOffset)}
						fromTop={fromTop}
						active={activeSection === "Contact"}
					>
						<FaEnvelope /> Contact
					</Link>
				</LinkContainer>
			</Container>
		)
	}
)

export default Menu
