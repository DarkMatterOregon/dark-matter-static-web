import React from 'react'
import styled from 'styled-components'
import { below, black } from '../utilities'
import HeaderLogo from './headerLogo'
import Navbar from './navbar'

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: 220px auto;
  grid-template-columns: 100%;
  justify-content: center;
  width: 100%;
  filter: drop-shadow(0 0 15px ${black});
  ${below.small`
    grid-template-rows: auto;
    grid-template-columns: 4fr 5fr;
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
