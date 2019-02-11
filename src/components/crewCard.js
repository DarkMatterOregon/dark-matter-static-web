import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CrewCard = ({ title, headshot, githubid, className }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <Img fluid={headshot.childImageSharp.fluid} alt={title} />
      <p>{githubid}</p>
    </div>
  )
}

const StyledCrewCard = styled(CrewCard)`
  width: 200px;
`

export default StyledCrewCard
