import React from 'react'
import { StaticQuery } from 'gatsby'
// import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const MediaPage = () => (
  <Layout>
    <SEO title="Media" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      // query={graphql`
      //   {
      //     body: markdownRemark(frontmatter: { title: { eq: "Media" } }) {
      //       frontmatter {
      //         title
      //       }
      //       html
      //     }
      //   }
      // `}
      render={data => (
        <div>
          {/* <div dangerouslySetInnerHTML={{ __html: data.body.html }} /> */}
          Media cards will go here, but where are we storing the data?
        </div>
      )}
    />
  </Layout>
)

export default MediaPage
