import * as React from "react"
import { Link } from "gatsby"

import InfoIcon from "../../static/icons/regular/info.svg"
import FactoryIcon from "../../static/icons/regular/factory.svg"
import UsersIcon from "../../static/icons/regular/users-three.svg"
import CoursesIcon from "../../static/icons/regular/book-bookmark.svg"
import BulbIcon from "../../static/icons/regular/lightbulb.svg"
import DevIcon from "../../static/icons/regular/desktop.svg"
import GuitarIcon from "../../static/icons/regular/guitar.svg"
import HouseIcon from "../../static/icons/regular/house-line.svg"
import WrenchIcon from "../../static/icons/regular/wrench.svg"
import CodeIcon from "../../static/icons/regular/code-simple.svg"
import ContactIcon from "../../static/icons/regular/chat-centered-dots.svg"
import LinkedInIcon from "../../static/icons/regular/linkedin-logo.svg"
import TwitterIcon from "../../static/icons/regular/twitter-logo.svg"

const Sidebar = ({ selected }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="avatar">image</div>
        <div className="sidebar-header-content">
          <h5>Mikkel Bech</h5>
          <p>Design Do'er</p>
        </div>
      </div>
      <div className="sidebar-menu">
        <a
          className={`sidebar-menu-item ${
            selected === "/" ? "menu-selected" : ""
          }`}
          href="/"
        >
          <div className="menu-item">
            <div className="menu-icon">
              <img src={InfoIcon} alt="info icon" />
            </div>
            <div className="menu-title">Introduction</div>
          </div>
          <div className="menu-shortcut">1</div>
        </a>
        <a
          className={`sidebar-menu-item ${
            selected === "/startups" ? "menu-selected" : ""
          }`}
          href="/startups"
        >
          <div className="menu-item">
            <div className="menu-icon">
              <img src={FactoryIcon} alt="info icon" />
            </div>
            <div className="menu-title">Startups</div>
          </div>
          <div className="menu-shortcut">2</div>
        </a>
        <a
          className={`sidebar-menu-item ${
            selected === "/service-design" ? "menu-selected" : ""
          }`}
          href="/service-design"
        >
          <div className="menu-item">
            <div className="menu-icon">
              <img src={UsersIcon} alt="info icon" />
            </div>
            <div className="menu-title">Service Design</div>
          </div>
          <div className="menu-shortcut">3</div>
        </a>
        <a
          className={`sidebar-menu-item ${
            selected === "/courses" ? "menu-selected" : ""
          }`}
          href="/courses"
        >
          <div className="menu-item">
            <div className="menu-icon">
              <img src={CoursesIcon} alt="info icon" />
            </div>
            <div className="menu-title">Courses</div>
          </div>
          <div className="menu-shortcut">4</div>
        </a>
        <a
          className={`sidebar-menu-item ${
            selected === "/thoughts" ? "menu-selected" : ""
          }`}
          href="/thoughts"
        >
          <div className="menu-item">
            <div className="menu-icon">
              <img src={BulbIcon} alt="info icon" />
            </div>
            <div className="menu-title">Thoughts</div>
          </div>
          <div className="menu-shortcut">5</div>
        </a>
        <a
          className={`sidebar-menu-item ${
            selected === "/dev" ? "menu-selected" : ""
          }`}
          href="/dev"
        >
          <div className="menu-item">
            <div className="menu-icon">
              <img src={DevIcon} alt="info icon" />
            </div>
            <div className="menu-title">Dev</div>
          </div>
          <div className="menu-shortcut">6</div>
        </a>
        <a
          className={`sidebar-menu-item ${
            selected === "/guitar" ? "menu-selected" : ""
          }`}
          href="/guitar"
        >
          <div className="menu-item">
            <div className="menu-icon">
              <img src={GuitarIcon} alt="info icon" />
            </div>
            <div className="menu-title">Guitar</div>
          </div>
          <div className="menu-shortcut">7</div>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
