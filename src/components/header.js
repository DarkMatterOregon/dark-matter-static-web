import { Link } from 'gatsby'
import React from 'react'
import Navbar from './navbar'
import HeaderLogo from './headerLogo'
import BackgroundImage from './backgroundImage'
import { elevation } from '../utilities'
import styled, { css } from 'styled-components'

const StyledHeader = styled.header`
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 4fr;

  ${elevation[2]};
  align-items: end;
  /* height: 100vh; */
  position: relative;
  /* ^^to contain the background image^^ */
  background-image: radial-gradient(white -50%, transparent 50%);

  ${({ home }) =>
    home &&
    css`
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
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  position: relative;
`

const Header = ({ pathname }) => (
  <StyledHeader home={pathname}>
    {pathname ? (
      <BackgroundImage>
        <Link to="/" style={{ textAlign: 'center' }}>
          <StyledLogo />
        </Link>
        <Navbar />
      </BackgroundImage>
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
