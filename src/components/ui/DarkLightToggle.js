import React, { useEffect } from "react"
import { useLocalStorage } from "../utils/useLocalStorage"

import SunIcon from "../../../static/icons/regular/sun.svg"
import MoonIcon from "../../../static/icons/regular/moon.svg"

export default function DarkLightToggle() {
  const [checked, setChecked] = useLocalStorage("checked", false)

  useEffect(() => {
    if (checked) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
    }
  }, [checked])

  function handleChange(e) {
    setChecked(e.target.checked)
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
    }
  }

  return (
    <div className="darkmode-toggle-button">
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={checked}
        onChange={e => handleChange(e)}
      />
      <label htmlFor="darkmode-toggle">
        <img src={SunIcon} alt="twitter" className="sun" />
        <img src={MoonIcon} alt="twitter" className="moon" />
      </label>
    </div>
  )
}
