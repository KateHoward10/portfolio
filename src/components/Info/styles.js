import styled from "styled-components"

export const Box = styled.div`
	box-shadow: 0 0 10px grey;
	border-radius: 5px;
	margin: 4vw 8vw;
	padding: 20px;
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
`

export const IconContainer = styled.div`
	width: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Text = styled.span`
	flex: 1;
	margin-left: 10px;
`
