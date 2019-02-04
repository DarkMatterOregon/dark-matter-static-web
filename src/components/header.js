import { Link } from 'gatsby'
import React from 'react'
import Navbar from './navbar'
import HeaderLogo from './headerLogo'
import BackgroundImage from './backgroundImage'
import { elevation } from '../utilities'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  ${elevation[2]};
  text-align: center;
  height: 100vh;
  position: relative;
  /* ^^to contain the background image^^ */
  background-image: radial-gradient(white -50%, transparent 50%);
`
const StyledLogo = styled(HeaderLogo)`
  max-height: 40vh;
  margin: 0 auto;
  text-align: center;
  position: relative;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <BackgroundImage>
      <Link to="/">
        <StyledLogo />
      </Link>
      <Navbar />
    </BackgroundImage>
  </StyledHeader>
)

export default Header
