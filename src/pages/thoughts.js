import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThoughtsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout currentPage="/thoughts">
      <div>
        <h1>Thoughts</h1>
        <div className="subTitle">
          Just some random thoughts from time to time
        </div>
        <div className="blog-post-list">
          {posts.map(({ node }) => (
            <div className="blog-post" key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>,{" "}
              {node.frontmatter.date}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Thoughts" url="/thoughts" />

export default ThoughtsPage
