import { Link } from 'gatsby'
import React from 'react'
import Navbar from './navbar'
import HeaderLogo from './headerLogo'
import HeaderBackground from './headerBackground'
import { elevation, white, black } from '../utilities'
import styled, { css } from 'styled-components'

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: 220px auto;
  justify-content: center;
  width: 100%;
  filter: drop-shadow(0 0 15px ${black});
`

const Header = () => (
  <StyledHeader>
    <HeaderLogo />
    <Navbar />
  </StyledHeader>
)

export default Header
