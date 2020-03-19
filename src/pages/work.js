import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const WorkPage = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <h1>The below content is edited with netlify CMS</h1>
    <StaticQuery
      query={graphql`
        {
          body: markdownRemark(frontmatter: { title: { eq: "Work" } }) {
            frontmatter {
              title
            }
            html
          }
        }
      `}
      render={data => (
        <div>
          <div dangerouslySetInnerHTML={{ __html: data.body.html }} />
        </div>
      )}
    />
  </Layout>
)

export default WorkPage
