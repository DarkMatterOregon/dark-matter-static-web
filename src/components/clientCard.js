import React from 'react'
import styled from 'styled-components' 

const ClientCard = (props, {className}) => {
  return (
    <div className={props.className}>
      <a href={props.website}>
        <h2>{props.company}</h2>
        <img src={props.logo} alt={props.company} />
      </a>
      <p>{props.description}</p>
    </div>
  )
}

const StyledClientCard = styled(ClientCard)`
  /* width: 200px; */
`

export default StyledClientCard
