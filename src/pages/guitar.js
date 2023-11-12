import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const GuitarPage = () => (
  <Layout currentPage="/guitar">
    <div>
      <h1>Guitar</h1>
      <div className="subTitle">
        Since the age of 10 I wanted to become a guitarist ... and I'm still
        trying 🤡
      </div>
      <p>
        I promise within long on this page there will be more info about my
        guitar passion and maybe even some videos of me playing
      </p>
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
