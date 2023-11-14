import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/ui/card"

const ServiceDesignPage = () => (
  <Layout currentPage="/service-design">
    <div className="narrow">
      <h1>Service Design</h1>
      <div className="subTitle">
        Service design embodies empathy and innovation, turning user needs into
        impactful solutions. It bridges gaps, creating seamless experiences, and
        fosters deep connections, making every interaction meaningful and
        user-centric. It is in fact such an important topic to me I started this
        website:
      </div>
      <div className="cards">
        <Card
          title="Service Design Hub"
          subTitle="A ressource and learning hub for Service Design"
          image="/images/misc/servicedesign.jpg"
          link="https://servicedesign.cc"
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
export const Head = () => <Seo title="Service Design" />

export default ServiceDesignPage
