// Modules
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Header from '~/components/layout/header/Header'
import Section from '~/components/layout/section/Section'

// Subpages
import Layout from './layout/Layout'
import Typography from './typography/Typography'

// Style
import './Features.less'

// Page: Features
const Features = () => {
  // Data
  const { feature } = useParams()

  // Render
  switch (feature) {
    case 'layout':
      return <Layout />
    case 'typography':
      return <Typography />
    default:
      return (
        <main data-page="features">
          <Helmet>
            <title>Isomorphic | Features</title>
          </Helmet>
          <Header>
            <Container>
              <h1>Features</h1>
              <p>This is <b>Features</b> page. There is also <Link to="/">Home</Link> page.</p>
            </Container>
          </Header>
          <Section>
            <Container>
              <b>List of features</b>
              <ul>
                <li><Link to="/features/layout">Layout</Link></li>
                <li><Link to="/features/typography">Typography</Link></li>
              </ul>
            </Container>
          </Section>
        </main>
      )
  }
}

// Export
export default Features
