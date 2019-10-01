import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ComingSoon from "../ComingSoon"
import { Container, Box, Link, Image } from "./styles"

const Projects = React.forwardRef((props, ref) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					projects {
						name
						link
						code_link
						desc
						comingSoon
					}
				}
			}
		}
	`)
	const projects = data.site.siteMetadata.projects

	return (
		<Container ref={ref}>
			{projects.map((project, index) => (
				<Box key={index} comingSoon={project.comingSoon}>
					{project.comingSoon && <ComingSoon />}
					<h3>{project.name}</h3>
					{project.desc && <p>{project.desc}</p>}
					{project.code_link && (
						<Image src={require(`../../images/${project.code_link}.png`)} />
					)}
					<p>
						{project.link && (
							<Link href={project.link} target="_blank">
								<span role="img" aria-label="eyes">
									👀
								</span>
								See in action
							</Link>
						)}
						{project.link && project.code_link && " • "}
						{project.code_link && (
							<Link href={project.code_link} target="_blank">
								<span role="img" aria-label="laptop">
									💻
								</span>
								See code
							</Link>
						)}
					</p>
				</Box>
			))}
		</Container>
	)
})

export default Projects
