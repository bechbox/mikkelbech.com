import * as React from "react"

import Seo from "../components/seo"

import { Link } from "gatsby"

// Supports weights 100-900
import "@fontsource-variable/inter"
import "../components/styles/links.scss"

import LinkedinIcon from "../../static/icons/regular/linkedin-logo.svg"
import TwitterIcon from "../../static/icons/regular/twitter-logo.svg"

const LinkPage = () => (
  <div className="links">
    <div className="links-wrapper">
      <div className="avatar-xl">
        <img src="/images/mikkelbech_square.jpg" alt="Mikkel Bech" />
      </div>
      <div className="links-description">
        <h1>Mikkel Bech</h1>
        <p>
          Service Designer, Entrepreneur, Computer Scientist, Guitarist,
          Photographer, 3D artist
        </p>
      </div>
      <div className="link-card-list">
        <Link
          to="https://www.mikkelbech.com"
          className="link-card"
          target="_blank"
          rel="noreferrer"
        >
          Personal website
        </Link>
        <Link
          to="https://www.emento.dk"
          className="link-card"
          target="_blank"
          rel="noreferrer"
        >
          Emento
        </Link>
        <Link
          to="https://www.bechbox.com"
          className="link-card"
          target="_blank"
          rel="noreferrer"
        >
          BechBox
        </Link>
        <Link
          to="https://www.servicedesign.cc"
          className="link-card"
          target="_blank"
          rel="noreferrer"
        >
          Service Design Hub
        </Link>
      </div>
      <div className="social-card-list">
        <Link
          to="https://www.linkedin.com/in/bechbox/"
          className="social-card"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedinIcon} alt="LinkedIn" />
        </Link>
        <Link
          to="https://twitter.com/bechbox"
          className="social-card"
          target="_blank"
          rel="noreferrer"
        >
          <img src={TwitterIcon} alt="Twitter" />
        </Link>
      </div>
    </div>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Mikkel Bech" />

export default LinkPage
