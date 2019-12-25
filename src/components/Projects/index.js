import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
							url
							desc
						}
					}
				}
				allFile(
					sort: { order: ASC, fields: [absolutePath] }
					filter: { relativePath: { regex: "/projects/.*.png/" } }
				) {
					edges {
						node {
							relativePath
							name
							childImageSharp {
								sizes(maxWidth: 240) {
									...GatsbyImageSharpSizes
								}
							}
						}
					}
				}
			}
		`)
		const projects = data.site.siteMetadata.projects
		const projectImages = data.allFile.edges

		return (
			<Container
				ref={ref}
				darkMode={darkMode}
				menuFixed={menuFixed}
				menuHeight={menuHeight}
			>
				{projects.map((project, index) => {
					const image = projectImages.find(
						item => item.node.name === project.link
					)
					return (
						<Box
							key={index}
							comingSoon={project.comingSoon}
							darkMode={darkMode}
						>
							<Link
								href={
									project.url ||
									`https://katehoward10.github.io/${project.link}/`
								}
								target="_blank"
								darkMode={darkMode}
							>
								<Image
									sizes={image.node.childImageSharp.sizes}
									alt={project.name}
								/>
								<h3>{project.name}</h3>
								{project.desc && <p>{project.desc}</p>}
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
					)
				})}
			</Container>
		)
	}
)

export default Projects
