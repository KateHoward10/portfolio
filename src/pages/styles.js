import styled from "styled-components"

export const Portfolio = styled.div`
	min-height: 100vh;
	background-color: ${props => (props.darkMode ? "#111" : "#eee")};
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`
