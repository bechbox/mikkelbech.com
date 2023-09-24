import * as React from "react"
import { Link } from "gatsby"

import InfoIcon from "../../static/icons/regular/info.svg"

const Sidebar = () => {
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
        <div className="sidebar-menu-item">
          <div className="menu-item">
            <div className="menu-icon">
              <img src={InfoIcon} alt="info icon" />
            </div>
            <div className="menu-title">Introduction</div>
          </div>
          <div className="menu-shortcut">1</div>
        </div>
        <div className="sidebar-menu-item menu-selected">
          <div className="menu-item">
            <div className="menu-icon">
              <img src={InfoIcon} alt="info icon" />
            </div>
            <div className="menu-title">Introduction</div>
          </div>
          <div className="menu-shortcut">1</div>
        </div>
        <div className="sidebar-menu-item">
          <div className="menu-item">
            <div className="menu-icon">
              <img src={InfoIcon} alt="info icon" />
            </div>
            <div className="menu-title">Introduction</div>
          </div>
          <div className="menu-shortcut">1</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
