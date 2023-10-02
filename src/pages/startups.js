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
          subTitle="Digital Care Guide Platform for healthcare"
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
          subTitle="Tool to motivate children to read more"
          image="/images/startups/bookbites.jpg"
          link="https://bookbites.com"
        />
        <Card
          title="Inet-Design"
          subTitle="Creative Digital Agency"
          image="/images/startups/inet-design.jpg"
          link="https://inetdesign.dk/en"
        />
        <Card
          title="BechBox"
          subTitle="Creative Visual Agency"
          image="/images/startups/bechbox.jpg"
          link="https://bechbox.com"
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
