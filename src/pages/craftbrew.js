import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactBrew from '../components/contactBrew'
import { useStaticQuery, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styled from 'styled-components'
import Img from 'gatsby-image'

const BeerButton = styled.button`
  margin: 0 auto;
  width: auto;
  background: #2b2b2b;
  border: none;
  height: auto;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0px 1px 5px #333;
  color: white;
  cursor: pointer;
  font-family: inherit;
  transition: 0.2s;
  font-size: 1.5rem;
  :hover {
    box-shadow: 0px 5px 10px #000;
    transform: translate(0, -2px);
  }
  :active {
    transform: translate(0, 1px);
  }
`

const CraftBrew = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Craft Brew" } }) {
        frontmatter {
          title
        }
        html
      }
      glimmerButton: file(relativePath: { eq: "glimmer-store.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const [showForm, setShowForm] = useState(false)
  const [submitMessage, setSubmitMessage] = useState()
  console.log(data.glimmerButton.childImageSharp)
  return (
    <Layout>
      <SEO title="Craft Brewery Conference" />
      <div style={{ transition: '.5s ease' }}>
        <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }}>
          Craft Brewery Conference
        </h1>
        <div style={{ textAlign: 'center' }}>
          <BeerButton onClick={() => setShowForm(true)}>
            Click here to talk about beer{' '}
            <span role="img" aria-label="beer">
              🍺
            </span>
          </BeerButton>
        </div>
        {showForm && (
          <ContactBrew
            setShowForm={setShowForm}
            setSubmitMessage={setSubmitMessage}
          />
        )}
        {submitMessage && (
          <h3 style={{ textAlign: 'center' }}>{submitMessage}</h3>
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <div>
        <OutboundLink
          href="http://www.glimmer.tech/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img
            fluid={data.glimmerButton.childImageSharp.fluid}
            style={{ maxWidth: 400, margin: '0 auto' }}
          />
        </OutboundLink>
      </div>
    </Layout>
  )
}

export default CraftBrew
