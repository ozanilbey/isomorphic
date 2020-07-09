// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Header from '~/components/layout/header/Header'

// Style
import './Layout.less'

// Subpage: Layout
const Layout = () => {
  // Render
  return (
    <main data-page="features" data-subpage="layout">
      <Helmet>
        <title>Isomorphic | Layout</title>
      </Helmet>
      <Header>
        <Container>
          <h1>Layout</h1>
          <p>This is <b>Layout</b> page, a subpage of <Link to="/features">Features</Link> page.</p>
        </Container>
      </Header>
    </main>
  )
}

// Export
export default Layout
