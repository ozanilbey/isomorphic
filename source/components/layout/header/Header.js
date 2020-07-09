// This is just a dummy component but it can be amplified in the future

// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Section from '~/components/layout/section/Section'

// Style
import './Header.less'

// Component > Layout: Header
const Header = props => {
  // Render
  return (
    <Section
      {...props}
      tag="header">
      {props.children}
    </Section>
  )
}

// Properties
Header.propTypes = {
  children: PropTypes.node
}

// Export
export default Header
