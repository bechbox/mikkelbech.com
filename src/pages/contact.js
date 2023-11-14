import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout currentPage="/contact">
    <div className="narrow">
      <h1>Contact</h1>
      <div className="subTitle">
        Hit me up on email:{" "}
        <a href="mailto:mikkel@bechbox.dk">mikkel@bechbox.dk</a>
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

export default ContactPage
