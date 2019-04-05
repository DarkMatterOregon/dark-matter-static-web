import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactBrew from '../components/contactBrew'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

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
  const craftbrewMD = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Craft Brew" } }) {
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
    <Layout>
      <SEO title="Craft Brew Conference" />
      <div style={{ transition: '.5s ease' }}>
        <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }}>
          Craft Brew Consulting
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
      <div
        dangerouslySetInnerHTML={{ __html: craftbrewMD.markdownRemark.html }}
      />
      <div>
       <a href="http://www.glimmer.tech/"> <img src=""/></a> 
      </div>
    </Layout>
  )
}

export default CraftBrew
