import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const GuitarPage = () => (
  <Layout currentPage="/guitar">
    <div>
      <h1>Guitar</h1>
      <div className="subTitle">Intro text</div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Guitar" />

export default GuitarPage
