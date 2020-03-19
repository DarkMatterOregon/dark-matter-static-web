import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const SpecialtiesPage = () => (
  <Layout>
    <SEO title="Specialties" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        {
          body: markdownRemark(frontmatter: { title: { eq: "Specialties" } }) {
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

export default SpecialtiesPage
