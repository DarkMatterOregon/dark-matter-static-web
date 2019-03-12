import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledLogo = styled(Img)`
  top: 60px;
  filter: drop-shadow(0px 0px 20px rgba(255, 255, 255));
`

const HeaderLogo = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        logoBackground: file(relativePath: { eq: "logoBackground.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Img
          className={className}
          fluid={data.logoBackground.childImageSharp.fluid}
          style={{ position: 'absolute', width: '200px' }}
        />
        <StyledLogo fluid={data.logo.childImageSharp.fluid} critical={true} />
      </div>
    )}
  />
)
export default HeaderLogo
