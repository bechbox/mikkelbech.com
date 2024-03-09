import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { title, date, author, slug } = post.frontmatter

  const Head = () => <Seo title={title} url={slug} type="article" />

  return (
    <Layout currentPage="/thoughts">
      <Head />
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
