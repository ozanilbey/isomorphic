// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'

// Style
import './Layout.less'

// Subpage: Layout
const Layout = () => {
  // Render
  return (
    <Page
      name="layout"
      parentName="features">
      <Helmet>
        <title>Isomorphic | Layout</title>
      </Helmet>
      <Page.Header name="introduction">
        <Container>
          <h1>Layout</h1>
          <p>This is <b>Layout</b> page, a subpage of <Link to="/features">Features</Link> page.</p>
        </Container>
      </Page.Header>
    </Page>
  )
}

// Export
export default Layout
