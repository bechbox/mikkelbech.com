import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CoursesPage = () => (
  <Layout currentPage="/courses">
    <div>
      <h1>Courses</h1>
      <div className="subTitle">Intro text</div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Courses" />

export default CoursesPage
