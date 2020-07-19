// Modules
import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

// Components
import Item from './item/Item'

// Utilities
import { getClassName, getResponsiveData } from '~/utilities/component'

// Constants
import {
  BOX_ALIGNMENT_HORIZONTAL_OPTIONS,
  BOX_ALIGNMENT_VERTICAL_OPTIONS,
  SPACING_OPTIONS,
  TEXT_ALIGNMENT_OPTIONS
} from '~/constants/generic'

// Style
import './Flex.less'

// Component: Layout > Flex
const Flex = props => {
  // Data
  const className = getClassName(props, {
    'align-vertical': props.vertical,
    'align-horizontal': props.horizontal,
    wrap: props.willWrap
      ? props.willWrapReverse ? 'reverse' : null
      : 'disabled',
    spacing: props.spacing,
    ...getResponsiveData(props, 'text')
  })

  // Methods
  const renderChildren = children => {
    return React.Children.map(children, child => {
      if (!child.props || child.type.displayName !== 'Flex.Item') return child
      if (child.props.isHidden) return null
      return cloneElement(child, {})
    })
  }

  // Render
  return (
    <div
      data-layout="flex"
      className={className}>
      {renderChildren(props.children)}
    </div>
  )
}

// Properties
Flex.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontal: PropTypes.oneOf(BOX_ALIGNMENT_HORIZONTAL_OPTIONS),
  isHidden: PropTypes.bool,
  name: PropTypes.string,
  spacing: PropTypes.oneOf(SPACING_OPTIONS),
  text: PropTypes.oneOf(TEXT_ALIGNMENT_OPTIONS),
  textL: PropTypes.oneOf(TEXT_ALIGNMENT_OPTIONS),
  textM: PropTypes.oneOf(TEXT_ALIGNMENT_OPTIONS),
  textS: PropTypes.oneOf(TEXT_ALIGNMENT_OPTIONS),
  textXL: PropTypes.oneOf(TEXT_ALIGNMENT_OPTIONS),
  textXS: PropTypes.oneOf(TEXT_ALIGNMENT_OPTIONS),
  vertical: PropTypes.oneOf(BOX_ALIGNMENT_VERTICAL_OPTIONS),
  willWrap: PropTypes.bool,
  willWrapReverse: PropTypes.bool
}
Flex.Item = Item
Flex.Item.displayName = 'Flex.Item'

// Export
export default Flex
