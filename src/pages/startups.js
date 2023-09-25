import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/ui/card"

const IndexPage = () => (
  <Layout currentPage="/startups">
    <div>
      <h1>Startups</h1>
      <div className="subTitle">
        I've co-founded quite a number of companies. Most noteworthy:
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
