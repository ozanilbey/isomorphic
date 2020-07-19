// Get final className of component
export const getClassName = (props, items) => {
  const classes = []
  for (const item in items) items[item] && classes.push(`${item}-${items[item]}`)
  if (props.className) classes.push(props.className)
  if (classes.length > 0) return classes.join(' ')
}
