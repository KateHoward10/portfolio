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
