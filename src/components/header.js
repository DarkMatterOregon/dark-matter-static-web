import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from './navbar'
import HeaderLogo from './headerLogo'
import BackgroundImage from './backgroundImage' 

const Header = ({ siteTitle }) => (
  <BackgroundImage >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          <HeaderLogo />
        </Link>
      </h1>
    </div>
    <Navbar />
  </BackgroundImage>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
