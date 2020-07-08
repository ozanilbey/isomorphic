// Modules
import React from 'react'
import { Link } from 'react-router-dom'

// Style
import './Layout.less'

// Subpage: Layout
const Layout = () => {
  // Render
  return (
    <main data-page="features" data-subpage="layout">
      <h1>Layout</h1>
      <p>This is <b>Layout</b> page, a subpage of <Link to="/features">Features</Link> page.</p>
    </main>
  )
}

// Export
export default Layout
