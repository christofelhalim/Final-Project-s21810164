import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { global, local, provinsi } from './page'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Covid-Tracker</h1>
        <nav>
            <ul>
              <li>
                <Link to="/global">
                  Global
                </Link>
              </li>
              <li>
                <Link to="/local">
                  Local
                </Link>
              </li>
              <li>
              <Link to="/provinsi">
                Provinsi
              </Link>
              </li>
            </ul>
          </nav>
      </div>
      <Switch>
        <Route path="/global">
        <global/>
        </Route>
        <Route path="/local">
        <local/>
        </Route>
        <Route path="/provinsi">
        <provinsi/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;