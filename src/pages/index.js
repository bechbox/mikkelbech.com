import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import EduIcon from "../../static/icons/regular/student.svg"
import HouseIcon from "../../static/icons/regular/house-line.svg"
import WrenchIcon from "../../static/icons/regular/wrench.svg"
import CodeIcon from "../../static/icons/regular/code-simple.svg"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout currentPage="/">
    <div className="narrow">
      <h1>Product. Design. Startup.</h1>
      <div className="subTitle">
        “The best way to predict the future is to invent it”, someone ...
        perhaps Allan Kay, said once. I'm a firm believer the best way to learn
        about the world is to build tools for people to use.
      </div>
      <hr />
      <p className="intro">
        Welcome to my little corner of the internet! With a background in
        Computer Science I've built a lot of products and started a{" "}
        <Link to="/startups">handful of companies</Link>. I'm not really a
        developer though! Service Design, empathy and strong UX/UI skills have
        been the primary weapons for the last more than 20 years of my carreer.
      </p>
      <div className="cv">
        <div className="cv-item">
          <div className="cv-icon">
            <img src={EduIcon} alt="house icon" />
          </div>
          <div className="cv-title">
            Master in Computer Science, University of Aarhus
          </div>
        </div>
        <div className="cv-item">
          <div className="cv-icon">
            <img src={HouseIcon} alt="house icon" />
          </div>
          <div className="cv-title">Aarhus, Denmark</div>
        </div>
        <div className="cv-item">
          <div className="cv-icon">
            <img src={WrenchIcon} alt="house icon" />
          </div>
          <div className="cv-title">
            Service Design, UI Design, JAMstack, Data Science, Photography, 3D
          </div>
        </div>
        <div className="cv-item">
          <div className="cv-icon">
            <img src={CodeIcon} alt="house icon" />
          </div>
          <div className="cv-title">Javascript, CSS, Python</div>
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" url="/" />

export default IndexPage
