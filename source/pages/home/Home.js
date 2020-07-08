// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Style
import './Home.less'

// Page: Home
const Home = () => {
  // Render
  return (
    <main data-page="home">
      <Helmet>
        <title>Isomorphic | Home</title>
      </Helmet>
      <h1>Home</h1>
      <p>This is <b>Home</b> page. There is also <Link to="/features">Features</Link> page.</p>
    </main>
  )
}

// Export
export default Home
