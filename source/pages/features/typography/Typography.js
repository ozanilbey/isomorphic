// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Style
import './Typography.less'

// Subpage: Typography
const Typography = () => {
  // Render
  return (
    <main data-page="features" data-subpage="typography">
      <Helmet>
        <title>Isomorphic | Typography</title>
      </Helmet>
      <h1>Typography</h1>
      <p>This is <b>Typography</b> page, a subpage of <Link to="/features">Features</Link> page.</p>
    </main>
  )
}

// Export
export default Typography
