import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CrewCard from '../components/crewCard'

const CrewCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  grid-gap: 10px;
`

const CrewPage = () => {
  const aboutMD = useStaticQuery(graphql`
    {
      body: markdownRemark(frontmatter: { title: { eq: "About" } }) {
        frontmatter {
          title
        }
        html
      }
      crew: markdownRemark(frontmatter: { title: { eq: "Crew" } }) {
        frontmatter {
          crew {
            specialties
            githubid
            linkedinid
            title
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Crew" />
      <div>
        {/* <div dangerouslySetInnerHTML={{ __html: aboutMD.body.html }} /> */}
        <h2>Crew</h2>
        <hr />
        <CrewCards>
          {aboutMD.crew.frontmatter.crew.map(crew => (
            <CrewCard {...crew} key={crew.githubid} />
          ))}
        </CrewCards>
      </div>
    </Layout>
  )
}

export default CrewPage
