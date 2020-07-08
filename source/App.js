// Modules
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Home from '~/pages/home/Home'
import Features from '~/pages/features/Features'

// Style
import '~/styles/index.less'

// Application
const App = () => {
  // Render
  return (
    <Switch>
      {/* Home */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Features */}
      <Route path="/features/:feature?">
        <Features />
      </Route>
      {/* Error */}
    </Switch>
  )
}

// Export
export default App
