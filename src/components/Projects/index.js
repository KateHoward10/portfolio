import React from "react"
import ComingSoon from "../ComingSoon"
import { Container, Box, Link, Image } from "./styles"
import projects from "../../data/projects"

const Projects = React.forwardRef((props, ref) => {
	return (
		<Container ref={ref}>
			{projects.map((project, index) => (
				<Box key={index} comingSoon={project.comingSoon}>
					{project.comingSoon && <ComingSoon />}
					<h3>{project.name}</h3>
					{project.desc && <p>{project.desc}</p>}
					{project.extra_link && (
						<a href={project.extra_link}>
							<p>{project.extra_link}</p>
						</a>
					)}
					{project.image && (
						<Image src={require(`../../images/${project.image}.png`)} />
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
