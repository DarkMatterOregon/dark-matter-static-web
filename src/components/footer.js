import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  max-width: 1000px;
  margin: 0 auto;
`

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org"> Gatsby </a>{' '}
  </StyledFooter>
)

export default Footer
