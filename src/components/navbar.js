import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { white, black } from '../utilities'

const NavList = styled.ul`
  list-style: none;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: auto;
  padding: 0;
  font-family: Montserrat;
  text-align: center;
`
const NavLi = styled.li`
  display: inline-block;
  margin-right: 1rem;
`
const StyledLink = styled(Link)`
  color: ${black};
  text-decoration: none;
  transition: 0.3s ease;
  padding: 0.3rem;

  &:hover,
  &:active,
  &.active {
    text-decoration: underline;
  }
  hr {
    margin: 0;
    padding: 0;
    color: ${black};
  }
`
const ListLink = props => (
  <NavLi>
    <StyledLink to={props.to} activeClassName="active">
      {props.children}
    </StyledLink>
  </NavLi>
)

const Navbar = () => (
  <div>
    <NavList>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/crew">Crew</ListLink>
      {/* <ListLink to="/specialties">Specialties</ListLink>
      <ListLink to="/clients">Our Work</ListLink>
      <ListLink to="/media">Media</ListLink> */}

      <ListLink to="/craftbrew/">
        <hr />
        Craft Brewery Conference
      </ListLink>
    </NavList>
  </div>
)

export default Navbar
