import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactUs from '../components/contactUs'

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

  const [showForm, setShowForm] = useState(false)
  const [submitMessage, setSubmitMessage] = useState()

  return (
    <Layout pathname={location.pathname}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div dangerouslySetInnerHTML={{ __html: HomeMD.markdownRemark.html }} />
      <hr />

      {submitMessage ? (
        <h3>submitMessage</h3>
      ) : (
        <ContactUs
          setShowForm={setShowForm}
          setSubmitMessage={setSubmitMessage}
        />
      )}
    </Layout>
  )
}

export default IndexPage
