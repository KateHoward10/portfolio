import React from "react"
import {
  ToggleContainer,
  Toggle,
  Hidden,
  Slider,
} from "./styles"
import { FaSun, FaMoon } from "react-icons/fa"

const ModeToggle = ({ darkMode, setDarkMode }) => (
  <ToggleContainer>
    <FaSun color="gold" />
    <Toggle darkMode={darkMode}>
      <Hidden
        type="checkbox"
        onChange={e => setDarkMode(e.target.checked)}
      />
      <Slider darkMode={darkMode} />
    </Toggle>
    <FaMoon color="gold" />
  </ToggleContainer>
)

export default ModeToggle
