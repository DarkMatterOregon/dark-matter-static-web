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

const AboutPage = () => {
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
            bio
            githubid
            title
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <div dangerouslySetInnerHTML={{ __html: aboutMD.body.html }} />
        <CrewCards>
          {aboutMD.crew.frontmatter.crew.map(crew => (
            <CrewCard {...crew} key={crew.githubid} />
          ))}
        </CrewCards>
      </div>
    </Layout>
  )
}

export default AboutPage
