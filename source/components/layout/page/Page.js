// Modules
import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

// Components
import Section from '~/components/layout/section/Section'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './Page.less'

// Component: Layout > Page
const Page = props => {
  // Data
  const className = getClassName(props, {
    decoration: props.isZebraStriped ? 'zebra-stripes' : null,
    screen: 'full'
  })

  // Methods
  const renderChildren = children => {
    return React.Children.map(children, child => {
      if (!child.props) return child
      if (child.props.isHidden) return null
      return cloneElement(child, {})
    })
  }

  // Render
  return (
    <main
      data-layout="page"
      data-page={props.name}
      data-parent={props.parentName}
      className={className}>
      {renderChildren(props.children)}
    </main>
  )
}

// Properties
Page.propTypes = {
  alignment: PropTypes.oneOf(['top', 'center', 'bottom']),
  children: PropTypes.node,
  className: PropTypes.string,
  isFullScreen: PropTypes.bool,
  isHidden: PropTypes.bool,
  isZebraStriped: PropTypes.bool,
  name: PropTypes.string,
  parentName: PropTypes.string,
  spacing: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
}
Page.Header = props => <Section semanticTag="header" {...props} />
Page.Header.displayName = 'Header'
Page.Section = props => <Section semanticTag="section" {...props} />
Page.Section.displayName = 'Section'
Page.Footer = props => <Section semanticTag="footer" {...props} />
Page.Footer.displayName = 'Footer'

// Export
export default Page