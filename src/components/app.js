import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './home'
import AllLinks from './allLinks'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="nav-bar-wrapper">
          <div className="nav-link-wrapper nav-link-header">
            <Link to="/">Redis Link Shortener</Link>
          </div>

          <div className="nav-link-wrapper nav-link-allLinks">
            <Link to="/links">All Links</Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/links">
            <AllLinks />
          </Route>
        </Switch>

      </div>
    )
  }
}
