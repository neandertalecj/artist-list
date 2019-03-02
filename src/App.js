import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DashboardPage from './components/DashboardPage'
import ArtistPage from './components/ArtistPage'
import FavoritesPage from './components/FavoritesPage'
import Default from './components/Default'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() { 
    return (
      <Provider store={store}>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/artist_page" component={ArtistPage} />
            <Route path="/favorites_page" component={FavoritesPage} />
            <Route component={Default} />
          </Switch>
        </Fragment>
      </Provider>
    )
  }
}
 
export default App