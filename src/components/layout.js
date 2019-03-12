import React from 'react'
import Header from './header'
import LayoutBackground from './layoutBackground'
import Footer from './footer'
import { GlobalStyle, white } from '../utilities'
import styled from 'styled-components'

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  max-width: 1000px;
  margin: 20px auto;
  padding: 1rem;
  grid-gap: 1rem;
  background: ${white}44;
`

const Layout = ({ children }) => (
  <>
    <LayoutBackground>
      <GlobalStyle />
      <StyledLayout>
        <Header />
        <main style={{ marginTop: '2rem' }}>{children}</main>
      </StyledLayout>
      <Footer />
    </LayoutBackground>
  </>
)

export default Layout
