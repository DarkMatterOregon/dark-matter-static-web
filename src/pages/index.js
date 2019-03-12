import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ location }) => {
  const HomeMD = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Home Page" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div dangerouslySetInnerHTML={{ __html: HomeMD.markdownRemark.html }} />
    </Layout>
  )
}

export default IndexPage
