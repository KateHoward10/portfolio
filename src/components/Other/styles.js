import styled from "styled-components"

export const Box = styled.div`
	box-shadow: 0 0 20px lightgrey;
	border-radius: 10px;
	margin: 4vw 10vw;
	padding: 30px;
	background-color: ${props => (props.darkMode ? "#111" : "#eee")};
	color: ${props => (props.darkMode ? "#fff" : "#000")};
`

export const List = styled.ul`
	list-style: none;
	padding: 0;
`

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	font-size: 15px;
	@media screen and (max-width: 500px) {
		font-size: 4vw;
	}
`

export const Text = styled.span`
	margin-left: 10px;
`
