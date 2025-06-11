import * as React from "react"
import { graphql } from "gatsby"

const BlogPostTemplate = ({data}: {data: any}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
        <div>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
        </div>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`