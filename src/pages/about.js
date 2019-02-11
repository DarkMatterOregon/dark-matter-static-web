import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CrewCard from '../components/crewCard'

const CrewCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>The below content is edited with netlify CMS</h1>
    <StaticQuery
      query={graphql`
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
                headshot {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <div dangerouslySetInnerHTML={{ __html: data.body.html }} />
          <CrewCards>
            {data.crew.frontmatter.crew.map(crew => (
              <CrewCard {...crew} key={crew.githubid} />
            ))}
          </CrewCards>
        </div>
      )}
    />
  </Layout>
)

export default AboutPage
