import styled, { css } from "styled-components"

export const Container = styled.nav`
	width: 100%;
	${props =>
		props.fromTop === 100 &&
		css`
			position: fixed;
			top: 0;
		`}
	background-color: hsla(240, 100%, 36%, ${props => props.fromTop}%);
	display: flex;
	padding: 20px 0;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2px solid hsl(240, 100%, 36%);
	box-shadow: 0 0 10px grey;
	z-index: 100;
`

export const TitleContainer = styled.div`
	padding: 0 20px;
`

export const Title = styled.a`
	color: rgba(255, 255, 255, ${props => props.fromTop}%);
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
	cursor: pointer;
`

export const MenuIcon = styled.a`
	padding: 0 20px;
	cursor: pointer;
	@media screen and (min-width: 500px) {
		display: none;
	}
`

export const Bar = styled.div`
	height: 4px;
	width: 24px;
	margin: 4px;
	background-color: rgba(255, 255, 255, ${props => props.fromTop}%);
	transition: 0.5s;
	${props =>
		props.menuOpen &&
		css`
			opacity: ${props.index === 1 ? 0 : 100};
			transform: ${props.index === 0
				? "rotate(-45deg) translate(-5px, 6px)"
				: props.index === 2 && "rotate(45deg) translate(-5px, -6px)"};
		`}
`

export const LinkContainer = styled.div`
	position: absolute;
	left: ${props => props.fromTop / 2 + 50}%;
	transform: translateX(${props => -(props.fromTop / 2 + 50)}%);
	@media screen and (max-width: 500px) {
		${props =>
			props.menuOpen
				? css`
						display: flex;
						flex-direction: column;
						width: 100%;
						align-items: center;
						position: absolute;
						background-color: hsl(240, 100%, 36%);
						top: ${props => props.menuHeight}px;
				  `
				: css`
						display: none;
				  `}
	}
`

export const Link = styled.a`
	padding: 0 20px;
	cursor: pointer;
	font-family: monospace;
	font-size: 16px;
	font-weight: bold;
	color: ${props =>
		props.darkMode ? "#FFF" : `hsl(240, 100%, ${props.fromTop}%)`};
	@media screen and (max-width: 500px) {
		${props =>
			props.menuOpen &&
			css`
				padding: 10px 0;
			`}
	}
`
