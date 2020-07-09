// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Header from '~/components/layout/header/Header'

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
      <Header>
        <Container>
          <h1>Home</h1>
          <p>This is <b>Home</b> page. There is also <Link to="/features">Features</Link> page.</p>
        </Container>
      </Header>
    </main>
  )
}

// Export
export default Home
