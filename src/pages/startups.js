import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/ui/card"

const StartupPage = () => (
  <Layout currentPage="/startups">
    <div>
      <h1>Startups</h1>
      <div className="subTitle">
        I've co-founded quite a number of companies. Most noteworthy:
      </div>
      <div className="cards">
        <Card
          title="Emento"
          subTitle="Digital Care Guide Platform"
          image="/images/startups/emento.jpg"
          link="https://emento.dk"
        />
        <Card
          title="Redia"
          subTitle="Digital Solutions for Public Libraries"
          image="/images/startups/redia.jpg"
          link="https://redia.dk"
        />
        <Card
          title="Bookbites"
          subTitle="Reading tool of the future"
          image="/images/startups/bookbites.jpg"
          link="https://bookbites.com"
        />
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Startups" />

export default StartupPage
