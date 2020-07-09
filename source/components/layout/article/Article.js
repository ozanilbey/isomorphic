// This is just a dummy component but it can be amplified in the future

// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Section from '~/components/layout/section/Section'

// Style
import './Article.less'

// Component > Layout: Article
const Article = props => {
  // Render
  return (
    <Section
      {...props}
      tag="article">
      {props.children}
    </Section>
  )
}

// Properties
Article.propTypes = {
  children: PropTypes.node
}

// Export
export default Article
