// Modules
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Style
import './Error.less'

// Page: Error
const Error = () => {
  // Data
  const { pathname } = useLocation()

  // Render
  return (
    <main data-page="error">
      <Helmet>
        <title>Isomorphic | Error</title>
      </Helmet>
      <h1>Error</h1>
      <p><mark>{pathname}</mark> cannot be found!</p>
      <p>This is <b>Error</b> page. Let‘s go to <Link to="/">Home</Link> page.</p>
    </main>
  )
}

// Export
export default Error
