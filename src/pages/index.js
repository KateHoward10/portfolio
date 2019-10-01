import React, { useState, useEffect, useRef } from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Projects from "../components/Projects"
import Other from "../components/Other"
import Footer from "../components/Footer"
import "../App.css"

function App() {
	const menu = useRef(null)
	let menuPosition = null
	const projects = useRef(null)
	const other = useRef(null)
	const footer = useRef(null)
	const [fromTop, setFromTop] = useState(0)

	function handleScroll() {
		if (menuPosition && window.pageYOffset >= menuPosition) {
			setFromTop(100)
		} else {
			setFromTop((window.pageYOffset / menuPosition) * 100)
		}
	}

	function scrollToSection(section) {
		window.scrollTo(0, section.current.offsetTop - menu.current.offsetHeight)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		menuPosition = menu.current.offsetTop
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="app">
			<Header />
			<Menu
				ref={menu}
				fromTop={fromTop}
				scrollToTop={() => window.scrollTo(0, 0)}
				scrollToProjects={() => scrollToSection(projects)}
				scrollToInfo={() => scrollToSection(other)}
				scrollToContact={() => scrollToSection(footer)}
			/>
			<Projects ref={projects} />
			<Other ref={other} />
			<Footer ref={footer} />
		</div>
	)
}

export default App
