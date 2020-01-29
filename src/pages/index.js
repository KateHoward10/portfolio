import React, { useState, useEffect, useRef } from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Projects from "../components/Projects"
import Other from "../components/Other"
import Contact from "../components/Contact"
import "../App.css"

function App() {
	const menu = useRef(null)
	let menuPosition = null
	const projects = useRef(null)
	const other = useRef(null)
	const contact = useRef(null)
	const [fromTop, setFromTop] = useState(0)
	const [darkMode, setDarkMode] = useState(false)
	const [scrollPosition, setScrollPosition] = useState(0)

	function handleScroll() {
		if (menuPosition && window.pageYOffset >= menuPosition) {
			setFromTop(100)
		} else {
			setFromTop((window.pageYOffset / menuPosition) * 100)
		}
		setScrollPosition(window.pageYOffset)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		menuPosition = menu.current.offsetTop
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div
			className="portfolio"
			style={{ backgroundColor: darkMode ? "#111" : "#eee" }}
		>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<Menu
				ref={menu}
				darkMode={darkMode}
				fromTop={fromTop}
				projectsOffset={
					projects.current &&
					projects.current.offsetTop - menu.current.offsetHeight
				}
				infoOffset={
					other.current && other.current.offsetTop - menu.current.offsetHeight
				}
				contactOffset={
					contact.current &&
					contact.current.offsetTop - menu.current.offsetHeight
				}
				scrollPosition={scrollPosition}
			/>
			<Projects
				ref={projects}
				darkMode={darkMode}
				menuFixed={fromTop === 100}
				menuHeight={menu && menu.current ? menu.current.offsetHeight : 0}
			/>
			<Other ref={other} darkMode={darkMode} />
			<Contact ref={contact} />
		</div>
	)
}

export default App
