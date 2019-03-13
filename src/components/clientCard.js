import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import { black, elevation } from '../utilities'

const ClientCard = ({ className, website, company, logo, description }) => {
  return (
    <div className={className}>
      <a href={website}>
        <h2>{company}</h2>
        {/* <Img
          fixed={logo.childImageSharp.fixed}
          alt={company}
          style={{ width: '100%' }}
        /> */}
      </a>
      <p>{description}</p>
    </div>
  )
}

const StyledClientCard = styled(ClientCard)`
  margin: 0 auto;
  width: 100%;
  transition: 0.2s;
  :hover {
    ${elevation[2]};
    transform: translate(0, -2px);
  }

  a {
    color: ${black};
  }
`

export default StyledClientCard
