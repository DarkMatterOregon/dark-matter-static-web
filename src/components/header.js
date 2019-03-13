import React from 'react'
import Navbar from './navbar'
import HeaderLogo from './headerLogo'
import { black, below } from '../utilities'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: 220px auto;
  justify-content: center;
  width: 100%;
  filter: drop-shadow(0 0 15px ${black});
  ${below.small`
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    
  `}
`

const Header = () => (
  <StyledHeader>
    <HeaderLogo />
    <Navbar />
  </StyledHeader>
)

export default Header
