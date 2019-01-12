import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby' 

const NavList = styled.ul`
  list-style: none;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 600px;
  padding: 0;
  padding-bottom: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const NavLi = styled.li`
  display: inline-block;
  margin-right: 1rem;
  padding: .3rem;
  transition: .5s ease;

  &:hover, &:active {
    background: #FFAA33aa;
    border-radius: 3px;
  }
`
const StyledLink = styled(Link)`
  color: #2b2b2b;
  text-decoration: none;
`
const ListLink = props => (
  <NavLi>
    <StyledLink href={props.to}>{props.children}</StyledLink>
  </NavLi>
)

const Navbar = () => (
  <div>
    <NavList>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/craftBrew">Craft Brew Fest</ListLink>
    </NavList>
  </div>
)

export default Navbar
