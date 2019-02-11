import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ClientCard from '../components/clientCard'

const Clients = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

const ClientPage = () => (
  <Layout>
    <SEO title="Our Work" keywords={[`gatsby`, `application`, `react`]} />
    <h1>The below content is edited with netlify CMS</h1>
    <StaticQuery
      query={graphql`
        {
          clients: markdownRemark(frontmatter: { title: { eq: "Our Work" } }) {
            frontmatter {
              title
              client {
                company
                description
                logo {
                  childImageSharp {
                    fluid(maxWidth: 630) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                website
              }
            }
          }
        }
      `}
      render={data => (
        <Clients>
          {data.clients.frontmatter.client.map(client => (
            <ClientCard {...client} key={client.company} />
          ))}
        </Clients>
      )}
    />
  </Layout>
)

export default ClientPage
