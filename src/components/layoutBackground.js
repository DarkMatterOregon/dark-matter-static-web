import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Img from 'gatsby-image'
const StyledImg = styled(Img)`
  position: fixed;
  opacity: 0.5;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  transform-origin: 73% 46%;
  overflow: visible;
`

const LayoutBackground = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "inverse-milky-way-1684226.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2500) {
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
        <>
          <StyledImg
            //className={className}
            fluid={imageData}
            critical={true}
            style={{
              position: 'fixed',
              width: '100%',
            }}
          />
          {children}
        </>
      )
    }}
  />
)

// const StyledBackgroundSection = styled(LayoutBackground)`
//   position: fixed;
//   width: 100%;
//   background-repeat: repeat-y;
//   :after {
//     background-position: center;
//   }
// `

// const rotate = keyframes`
//   from {
//     transform: scale(2) rotate(0deg);
//   }

//   to {
//     transform: scale(2) rotate(360deg);
//   }
// `

export default LayoutBackground
