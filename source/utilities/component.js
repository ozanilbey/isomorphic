// Constants
import { SIZING_ALTERNATIVES } from '~/constants/generic'

// Get final className of component
export const getClassName = (props, items) => {
  const classes = []
  for (const item in items) items[item] && classes.push(`${item}-${items[item]}`)
  if (props.className) classes.push(props.className)
  if (classes.length > 0) return classes.join(' ')
}

// Get values of a property at each breakpoint
export const getResponsiveData = (source, property) => {
  const list = {}
  SIZING_ALTERNATIVES.forEach(size => {
    list[size === 'auto' ? property : `${property}-${size}`] = source[`${property}${size === 'auto' ? '' : size.toUpperCase()}`]
  })
  return list
}