import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { title, date, author } = post.frontmatter

  return (
    <Layout currentPage="/thoughts">
      <div className="blog narrow">
        <h1>{title}</h1>
        <p>
          {date}, by {author}
        </p>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPostTemplate
