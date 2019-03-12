import React from 'react'
import Header from './header'
import LayoutBackground from './layoutBackground'
import { GlobalStyle } from '../utilities'
import styled from 'styled-components'

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  max-width: 1000px;
  margin: 20px auto;
  padding: 1rem;
  grid-gap: 1rem;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledLayout>
      <Header />
      <LayoutBackground>
        <main>{children}</main>
        <footer>
          © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </LayoutBackground>
    </StyledLayout>
  </>
)

export default Layout
