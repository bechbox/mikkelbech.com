import React, { useState, useRef, useEffect } from "react"
import menuItems from "../../data/menuItems"
import burger from "../../../static/icons/regular/list.svg"
import { Link } from "gatsby"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullyClosed, setIsFullyClosed] = useState(true) // New state
  const trayRef = useRef(null)

  const toggleMenu = () => {
    if (!isOpen) {
      setIsFullyClosed(false) //  Will be fully closed only after transition
    } else {
      setTimeout(() => {
        setIsFullyClosed(true)
      }, 200) // Delay in milliseconds
    }

    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "open" : "closed"} ${
          isFullyClosed ? "fully-closed" : ""
        }`}
        onClick={toggleMenu}
      >
        <div className="menu-button">
          <div onClick={toggleMenu} className="menu-button-wrapper">
            <img src={burger} alt="menu" className="menu-icon" />
          </div>
        </div>
        <div className="tray-backdrop"></div>
        <div
          className={`tray ${isOpen ? "tray-open" : "tray-closed"}`}
          ref={trayRef}
        >
          <div className="menu-content">
            <div className="menu-header">
              <h3>Options</h3>
            </div>
            <div className="menu-items">
              {menuItems.map(item => (
                <Link key={item.key} to={item.path} className="menu-item">
                  <div className="menu-item-icon">
                    <img src={item.icon} alt={`${item.title} icon`} />
                  </div>
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
