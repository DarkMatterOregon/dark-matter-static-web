import React from 'react'
import styled from 'styled-components'

const CrewCard = ({ title, specialties, githubid, className }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <img
        src={`https://github.com/${githubid}.png?size=200`}
        alt={title}
        style={{ width: '100%' }}
      />
      <ul>
        <li>Specialties: {specialties}</li>
        <li>
          Github: <a href={`https://github.com/${githubid}`}>{githubid}</a>
        </li>
      </ul>
    </div>
  )
}

const StyledCrewCard = styled(CrewCard)`
  margin: 0 auto;
  width: 100%;
  text-align: left;
`

export default StyledCrewCard
