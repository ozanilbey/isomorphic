// Get final className of component
export const getClassName = (props, items) => {
  const classes = []
  for (const item in items) classes.push(`${item}-${items[item]}`)
  if (props.className) classes.push(props.className)
  return classes.join(' ')
}
