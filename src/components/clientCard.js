import React from 'react'
import styled from 'styled-components' 

const ClientCard = (props, {className}) => {
  return (
    <div className={props.className}>
      <h2>{props.company}</h2>
      <img src={props.logo} alt={props.company} />
      <p>{props.description}</p>
    </div>
  )
}

const StyledClientCard = styled(ClientCard)`
  /* width: 200px; */
`

export default StyledClientCard
