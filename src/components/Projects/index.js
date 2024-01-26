import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
  FilterContainer,
  FilterButton,
  FilterList,
  Filter,
  Box,
  Link,
  Image,
  TagContainer,
  Tag,
  CodeLink,
} from "./styles"
import { FaCode, FaTimes, FaChevronUp, FaChevronDown } from "react-icons/fa"

const Projects = React.forwardRef(({ menuFixed, menuHeight }, ref) => {
  const [filters, setFilters] = useState([])
  const [showFilters, toggleFilters] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projects {
            name
            link
            url
            tags
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
  const allTags = projects.map(project => project.tags)
  const tags = [...new Set([].concat(...allTags))].sort()

  function selectFilter(filter) {
    toggleFilters(false)
    setFilters(
      filters.indexOf(filter) > -1
        ? filters.filter(f => f !== filter)
        : [...filters, filter]
    )
  }

  return (
    <Container ref={ref} menuFixed={menuFixed} menuHeight={menuHeight}>
      <FilterContainer>
        <FilterButton onClick={() => toggleFilters(!showFilters)}>
          <span>Filter projects </span>
          {showFilters ? <FaChevronUp /> : <FaChevronDown />}
        </FilterButton>
        {showFilters && (
          <FilterList>
            {tags.map((tag, index) => (
              <Filter
                key={index}
                value={tag}
                selected={filters.indexOf(tag) > -1}
                onClick={() => selectFilter(tag)}
              >
                {tag}
              </Filter>
            ))}
          </FilterList>
        )}
        <TagContainer>
          {filters.map((filter, index) => (
            <Tag key={index}>
              {filter}{" "}
              <FaTimes
                onClick={() => setFilters(filters.filter(f => f !== filter))}
                style={{ paddingLeft: "2px" }}
              />
            </Tag>
          ))}
        </TagContainer>
      </FilterContainer>
      {projects
        .filter(
          project =>
            !filters.length ||
            project.tags.some(tag => filters.indexOf(tag) > -1)
        )
        .map((project, index) => {
          const image = projectImages.find(
            item => item.node.name === project.link
          )
          return (
            <Box key={index}>
              <Link
                href={project.url || `https://katehoward10.github.io/${project.link}/`}
                target="_blank"
                className="link"
              >
                <h3>{project.name}</h3>
                <Image
                  fluid={image.node.childImageSharp.sizes}
                  alt={project.name}
                />
              </Link>
              {project.tags && (
                <TagContainer>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagContainer>
              )}
              <CodeLink
                href={`https://github.com/katehoward10/${project.link}`}
                target="_blank"
                className="link"
              >
                <FaCode style={{ marginRight: "8px" }} />
                See code
              </CodeLink>
            </Box>
          )
        })}
    </Container>
  )
})

export default Projects
