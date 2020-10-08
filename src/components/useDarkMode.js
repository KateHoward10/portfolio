import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  const setMode = value => {
    window.localStorage.setItem("darkMode", value)
    setDarkMode(value)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("darkMode")
    localTheme && setDarkMode(localTheme === "true")
  }, [])

  return [darkMode, setMode]
}
