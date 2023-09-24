/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Supports weights 100-900
import "@fontsource-variable/inter"
import "./styles/main.scss"

import Sidebar from "./sidebar"

const Layout = ({ currentPage, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout">
      <Sidebar selected={currentPage} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
