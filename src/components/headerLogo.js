import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { below } from '../utilities'

const StyledLogo = styled(Img)`
  top: 60px;
  filter: drop-shadow(0px 0px 20px rgba(255, 255, 255));
  ${below.small`
    top: 17px;
    left:-10px;
  `}
`
const StyledBackground = styled.div`
  width: 200px;
  position: absolute;
  ${below.small`
  width: 100px;
`}
`
const ResponsiveWrap = styled.div`
  ${below.small`
    width: 110px;
  `}
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
      <ResponsiveWrap>
        <StyledBackground>
          <Img
            fluid={data.logoBackground.childImageSharp.fluid}
            // style={{ position: 'absolute', width: '100px' }}
          />
        </StyledBackground>

        <StyledLogo fluid={data.logo.childImageSharp.fluid} critical={true} />
      </ResponsiveWrap>
    )}
  />
)
export default HeaderLogo
