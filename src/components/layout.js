/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import CommandMenu from "./commandMenu"

// Supports weights 100-900
import "@fontsource-variable/inter"
import "./styles/main.scss"

import Sidebar from "./sidebar"

const Layout = ({ currentPage, children }) => {
  const containerElement = React.useRef(null)
  const [commandMenu, setCommandMenu] = React.useState(null)

  React.useEffect(() => {
    // Once the component is mounted, set the commandMenu state.
    setCommandMenu(<CommandMenu element={containerElement.current} />)
  }, []) // Empty dependency array means this effect runs once after initial render.

  return (
    <>
      <div className="layout">
        <Sidebar selected={currentPage} />
        <main>{children}</main>
      </div>
      <div className="vercel" ref={containerElement}></div>
      {commandMenu}
    </>
  )
}

export default Layout
