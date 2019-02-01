import { Link } from 'gatsby'
import React from 'react'
import Navbar from './navbar'
import HeaderLogo from './headerLogo'
import BackgroundImage from './backgroundImage'
import { elevation } from '../utilities'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${elevation[2]};
  text-align: center;
`
const StyledLogo = styled(HeaderLogo)`
  max-height: 40vh;
  margin: 0 auto;
  text-align: center;
  position: relative;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <BackgroundImage />
    <Link to="/" >
      <StyledLogo />
    </Link>
    <Navbar />
  </StyledHeader>
)

export default Header
