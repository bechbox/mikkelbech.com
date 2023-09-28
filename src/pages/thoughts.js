import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThoughtsPage = () => (
  <Layout currentPage="/thoughts">
    <div>
      <h1>Thoughts</h1>
      <div className="subTitle">Intro text</div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default ThoughtsPage
