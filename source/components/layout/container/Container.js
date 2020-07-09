// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Container.less'

// Component > Layout: Container
const Container = props => {
  // Data
  const className = getClassName(props, {})

  // Render
  return (
    <div
      data-layout="container"
      data-name={props.name}
      className={className}>
      {props.children}
    </div>
  )
}

// Properties
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string
}

// Export
export default Container
