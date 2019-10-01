import styled from "styled-components"

export const Container = styled.div`
	background-color: #8ee1dd;
	background: linear-gradient(127deg, hsl(240, 100%, 36%), transparent 80%),
		linear-gradient(217deg, hsl(180, 100%, 36%), transparent 80%),
		linear-gradient(336deg, hsl(120, 100%, 36%), transparent 60%);
	display: flex;
	flex-direction: row;
	padding: 20px;
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	color: white;
	font-family: monospace;
	margin: 20px;
`

export const Image = styled.img`
	width: 200px;
	height: 200px;
	object-fit: cover;
	border-radius: 50%;
	margin: 20px;
`

export const ToggleContainer = styled.div`
	position: absolute;
	top: 10px;
	right: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Toggle = styled.label`
	width: 60px;
	height: 36px;
	border-radius: 18px;
	background-color: lightgrey;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 5px;
	justify-content: ${props => (props.darkMode ? "flex-end" : "flex-start")};
`

export const Hidden = styled.input`
	display: none;
`

export const Slider = styled.div`
	cursor: pointer;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin: 3px;
	box-shadow: 0 0 6px grey;
	background-color: ${props => (props.darkMode ? "navy" : "deepskyblue")};
`
