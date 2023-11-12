import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DevPage = () => (
  <Layout currentPage="/dev">
    <div>
      <h1>Dev</h1>
      <div className="subTitle">Gatsby</div>
      I've been exploring Static Site Generators with Gatsby and have built a
      number of sites for myself and for others with Gatsby and Contentful:
      <br />
      <div className="link-list">
        <a
          href="https://bechbox.com/"
          title="BechBox website"
          target="_blank"
          rel="noreferrer"
        >
          bechbox.com
        </a>
        <a
          href="https://emento.dk/"
          title="Emento website"
          target="_blank"
          rel="noreferrer"
        >
          emento.dk
        </a>
        <a
          href="https://emento.de/"
          title="Emento Germany website"
          target="_blank"
          rel="noreferrer"
        >
          emento.de
        </a>
        <a
          href="https://creatormockups.cc/"
          title="Creator Mockups"
          target="_blank"
          rel="noreferrer"
        >
          creatormockups.cc
        </a>
        <a
          href="https://servicedesign.cc/"
          title="Service Design Hub"
          target="_blank"
          rel="noreferrer"
        >
          servicedesign.cc
        </a>
        <a
          href="https://mikkelbech.com"
          title="Mikkel Bech personal website"
          target="_blank"
          rel="noreferrer"
        >
          mikkelbech.com
        </a>
        <a
          href="https://learning.bechbox.com/"
          title="BechBox Learning"
          target="_blank"
          rel="noreferrer"
        >
          learning.bechbox.com
        </a>
      </div>
      <div className="subTitle">Small projects</div>
      <p>
        <a
          href="https://playground.bechbox.com/"
          title="UI Playground"
          target="_blank"
          rel="noreferrer"
        >
          UI Playground
        </a>
      </p>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default DevPage
