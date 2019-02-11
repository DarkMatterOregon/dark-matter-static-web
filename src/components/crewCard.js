import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CrewCard = ({ title, headshot, githubid, className }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <Img
        fixed={headshot.childImageSharp.fixed}
        alt={title}
        style={{ width: '100%' }}
      />
      <p>{githubid}</p>
    </div>
  )
}

const StyledCrewCard = styled(CrewCard)`
  margin: 0 auto;
  width: 100%;
`

export default StyledCrewCard
