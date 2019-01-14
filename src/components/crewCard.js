import React from 'react'
import styled from 'styled-components' 

const CrewCard = (props, {className}) => {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <img src={props.headshot} alt={props.title} />
      <p>{props.githubid}</p>
    </div>
  )
}

const StyledCrewCard = styled(CrewCard)`
  /* width: 200px; */
`

export default StyledCrewCard
