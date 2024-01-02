import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/ui/card"

const CoursesPage = () => (
  <Layout currentPage="/courses">
    <div className="narrow">
      <h1>Courses</h1>
      <div className="subTitle">
        I enjoy teaching and passing on some of the knowledge I picked up
      </div>
      <div className="cards">
        <Card
          title="Generative AI image making"
          subTitle="Online version of course taught at The Danish Union of Journalists - Media & Communications"
          image="/images/misc/ai_webinar.jpg"
          link="https://learning.bechbox.com"
        />
        <Card
          title="Design leadership for doctors"
          subTitle="Twice a year I teach Leadership and Change Management at the Faculty of Health, University of Aarhus"
          image="/images/startups/emento.jpg"
          link="https://health.au.dk/"
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
export const Head = () => <Seo title="Courses" />

export default CoursesPage
