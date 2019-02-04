import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavList = styled.ul`
  list-style: none;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 700px;
  padding: 0;
  padding-bottom: 1rem;
  font-family: Montserrat;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const NavLi = styled.li`
  display: inline-block;
  margin-right: 1rem;
`
const StyledLink = styled(Link)`
  color: #2b2b2b;
  text-decoration: none;
  transition: 0.3s ease;
  padding: 0.3rem;

  &:hover,
  &:active {
    background: #ffaa33aa;
    border-radius: 3px;
  }
`
const ListLink = props => (
  <NavLi>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </NavLi>
)

const Navbar = () => (
  <div>
    <NavList>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/specialties">Specialties</ListLink>
      <ListLink to="/clients">Our Work</ListLink>
      <ListLink to="/media">Media</ListLink>
      <ListLink to="/craftbrew/">Craft Brew Fest</ListLink>
    </NavList>
  </div>
)

export default Navbar
