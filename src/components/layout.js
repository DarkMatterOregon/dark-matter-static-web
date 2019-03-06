import React from 'react'

import Header from './header'
//import './layout.css'
import { Spring } from 'react-spring/renderprops'
import LayoutBackground from './layoutBackground'
import { GlobalStyle } from '../utilities'

const Layout = ({ children, pathname }) => (
  <>
    <GlobalStyle />
    {pathname ? (
      <Spring config="slow" from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {style => (
          <div style={style}>
            <Header pathname={pathname} />
          </div>
        )}
      </Spring>
    ) : (
      <Header />
    )}
    <LayoutBackground>
      <div
        style={{
          margin: `20px auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {children}
        <footer>
          © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </LayoutBackground>
  </>
)

export default Layout
