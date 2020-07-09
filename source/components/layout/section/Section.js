// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Section.less'

// Component > Layout: Section
const Section = props => {
  // Data
  const TagName = props.tag
  const className = getClassName(props, {
    spacing: props.spacing,
    height: props.isFullScreen ? 'full' : 'auto'
  })

  // Render
  return (
    <TagName
      data-name={props.name}
      data-layout="section"
      className={className}>
      {props.children}
    </TagName>
  )
}

// Properties
Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isFullScreen: PropTypes.bool,
  name: PropTypes.string,
  spacing: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  tag: PropTypes.oneOf(['header', 'section', 'article', 'footer'])
}
Section.defaultProps = {
  isFullScreen: false,
  spacing: 'medium',
  tag: 'section'
}

// Export
export default Section
