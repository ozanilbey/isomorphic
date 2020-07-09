// This is just a dummy component but it can be amplified in the future

// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Section from '~/components/layout/section/Section'

// Style
import './Footer.less'

// Component > Layout: Footer
const Footer = props => {
  // Render
  return (
    <Section
      {...props}
      tag="footer">
      {props.children}
    </Section>
  )
}

// Properties
Footer.propTypes = {
  children: PropTypes.node
}

// Export
export default Footer
