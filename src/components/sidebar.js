import * as React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

import menuItems from "../data/menuItems"

import ContactIcon from "../../static/icons/regular/chat-centered-dots.svg"
import LinkedInIcon from "../../static/icons/regular/linkedin-logo.svg"
import TwitterIcon from "../../static/icons/regular/twitter-logo.svg"
import DarkLightToggle from "./ui/DarkLightToggle"

const Sidebar = ({ selected }) => {
  // Sidebar shortcuts
  React.useEffect(() => {
    const down = e => {
      const menuItem = menuItems.find(item => item.key === e.key)
      if (menuItem) {
        navigate(menuItem.path)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [menuItems]) // Dependencies now correctly include the memoized menuItems

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="avatar">
          <img
            src="/images/mikkelbech_square.jpg"
            alt="Mikkel Bech, portrait"
          />
        </div>
        <div className="sidebar-header-content">
          <h5>Mikkel Bech</h5>
          <p>Design Do'er</p>
        </div>
      </div>
      <div className="sidebar-menu">
        {menuItems.map(item => (
          <Link
            key={item.key}
            className={`sidebar-menu-item ${
              selected === item.path ? "menu-selected" : ""
            }`}
            to={item.path}
          >
            <div className="menu-item">
              <div className="menu-icon">
                <img src={item.icon} alt={`${item.title} icon`} />
              </div>
              <div className="menu-title">{item.title}</div>
            </div>
            <div className="menu-shortcut">{item.key}</div>
          </Link>
        ))}
      </div>
      <h3>Connect</h3>
      <div className="sidebar-menu">
        <Link key="contact" className="sidebar-menu-item" to="/contact">
          <div className="menu-item">
            <div className="menu-icon">
              <img src={ContactIcon} alt="contact" />
            </div>
            <div className="menu-title">Contact</div>
          </div>
          <div></div>
        </Link>
        <a
          key="linkedin"
          className="sidebar-menu-item"
          href="https://www.linkedin.com/in/bechbox/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="menu-item">
            <div className="menu-icon">
              <img src={LinkedInIcon} alt="linkedin" />
            </div>
            <div className="menu-title">LinkedIn</div>
          </div>
          <div></div>
        </a>
        <a
          key="twitter"
          className="sidebar-menu-item"
          href="https://twitter.com/bechbox"
          target="_blank"
          rel="noreferrer"
        >
          <div className="menu-item">
            <div className="menu-icon">
              <img src={TwitterIcon} alt="twitter" />
            </div>
            <div className="menu-title">Twitter</div>
          </div>
          <div></div>
        </a>
      </div>
      <div className="theme-switcher">
        <DarkLightToggle />
      </div>
    </div>
  )
}

export default Sidebar
