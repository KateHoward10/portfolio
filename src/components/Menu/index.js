import React, { useState } from "react"
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
		{ fromTop, scrollToTop, scrollToProjects, scrollToInfo, scrollToContact },
		ref
	) => {
		const [menuOpen, toggleMenuOpen] = useState(false)

		return (
			<Container ref={ref} fromTop={fromTop}>
				<TitleContainer>
					<Title onClick={scrollToTop} fromTop={fromTop}>
						Kate Howard
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
				>
					<Link
						menuOpen={menuOpen}
						onClick={scrollToProjects}
						fromTop={fromTop}
					>
						Projects
					</Link>
					<Link menuOpen={menuOpen} onClick={scrollToInfo} fromTop={fromTop}>
						Info
					</Link>
					<Link menuOpen={menuOpen} onClick={scrollToContact} fromTop={fromTop}>
						Contact
					</Link>
				</LinkContainer>
			</Container>
		)
	}
)

export default Menu
