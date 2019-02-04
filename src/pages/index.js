import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>The below content is edited with netlify CMS</h1>
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "Home Page" } }) {
            frontmatter {
              title
            }
            html
          }
        }
      `}
      render={data => (
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      )}
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
