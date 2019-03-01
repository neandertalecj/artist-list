import React, { Component, Fragment } from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'

class App extends Component {
  render() { 
    return (
      <Fragment>
        <Navbar />
        <Content />
      </Fragment>
    )
  }
}
 
export default App