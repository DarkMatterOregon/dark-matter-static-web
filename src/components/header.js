import { Link } from 'gatsby'
import React from 'react'
import Navbar from './navbar'
import HeaderLogo from './headerLogo'
import HeaderBackground from './headerBackground'
import { elevation, white } from '../utilities'
import styled, { css } from 'styled-components'

const StyledHeader = styled.header`
  display: grid;
  justify-content: center;
  grid-template-columns: 200px auto;
  
  /* ${elevation[2]}; */
  align-items: end;
  /* height: 100vh; */
  position: relative;
  /* ^^to contain the background image^^ */
  background-image: linear-gradient(rgba(0,0,0,.4) 0%, transparent 90%, ${white} 100%);
  
  ${({ home }) =>
    home &&
    css`
      background-image: radial-gradient(${white} -50%, transparent 50%);
      height: 100vh;
      align-content: center;
      grid-template-columns: 1fr;

      @media only screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        height: auto;
      }
    `}
`
const StyledLogo = styled(HeaderLogo)`
  margin: 1rem auto;
  max-width: 500px;
  text-align: center;
  position: relative;
`

const Header = ({ pathname }) => (
  <StyledHeader home={pathname}>
    {pathname ? (
      <HeaderBackground>
        <Link to="/" style={{ textAlign: 'center' }}>
          <StyledLogo />
        </Link>
        <Navbar />
      </HeaderBackground>
    ) : (
      <>
        <Link to="/" style={{ textAlign: 'center' }}>
          <StyledLogo />
        </Link>
        <Navbar />
      </>
    )}
  </StyledHeader>
)

export default Header
