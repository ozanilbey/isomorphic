// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Style
import './Layout.less'

// Subpage: Layout
const Layout = () => {
  // Render
  return (
    <main data-page="features" data-subpage="layout">
      <Helmet>
        <title>Isomorphic | Features</title>
      </Helmet>
      <h1>Layout</h1>
      <p>This is <b>Layout</b> page, a subpage of <Link to="/features">Features</Link> page.</p>
    </main>
  )
}

// Export
export default Layout
