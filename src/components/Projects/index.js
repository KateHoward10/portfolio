import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Box, Link, Image, CodeLink } from "./styles"
import { FaCode } from "react-icons/fa"

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
								<h3>{project.name}</h3>
								<Image
									sizes={image.node.childImageSharp.sizes}
									alt={project.name}
								/>
							</Link>
							<p>
								<CodeLink
									href={`https://github.com/katehoward10/${project.link}`}
									target="_blank"
									darkMode={darkMode}
								>
									<FaCode style={{ marginRight: "8px" }} />
									See code
								</CodeLink>
							</p>
						</Box>
					)
				})}
			</Container>
		)
	}
)

export default Projects
