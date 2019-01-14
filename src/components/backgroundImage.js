import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
// import styled from 'styled-components'

import Img from 'gatsby-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "black_hole_milkyway_header.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <Img
          className={className}
          fluid={imageData}
          critical={true}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '40%',
            
          }}
        />
      )
    }}
  />
)

// const StyledBackgroundSection = styled(BackgroundSection)`
//   position: fixed;
//   width: 100%;
//   background-repeat: repeat-y;
//   :after {
//     background-position: center;
//   }
// `

export default BackgroundSection
