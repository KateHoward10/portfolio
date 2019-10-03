import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ComingSoon from "../ComingSoon"
import { Container, Box, Link, Image, Emoji } from "./styles"

const Projects = React.forwardRef(
	({ darkMode, menuFixed, menuHeight }, ref) => {
		const data = useStaticQuery(graphql`
			query {
				site {
					siteMetadata {
						projects {
							name
							link
							desc
							comingSoon
						}
					}
				}
			}
		`)
		const projects = data.site.siteMetadata.projects

		return (
			<Container
				ref={ref}
				darkMode={darkMode}
				menuFixed={menuFixed}
				menuHeight={menuHeight}
			>
				{projects.map((project, index) => (
					<Box key={index} comingSoon={project.comingSoon} darkMode={darkMode}>
						{project.comingSoon && <ComingSoon />}
						<Link
							href={`https://katehoward10.github.io/${project.link}/`}
							target="_blank"
							darkMode={darkMode}
						>
							<h3>{project.name}</h3>
							{project.desc && <p>{project.desc}</p>}
							<Image src={require(`../../images/${project.link}.png`)} />
						</Link>
						<p>
							<Link
								href={`https://github.com/katehoward10/${project.link}`}
								target="_blank"
								darkMode={darkMode}
							>
								<Emoji role="img" aria-label="laptop">
									💻
								</Emoji>
								See code
							</Link>
						</p>
					</Box>
				))}
			</Container>
		)
	}
)

export default Projects
