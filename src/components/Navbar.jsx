import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'

const Navbar = () => {
  return (
    <AppBar color="primary" position="static">
      <h1>Artist list</h1>
      <Link to="/" >
              <h2>Home</h2>
      </Link>
      <Link to="/favorites_page" >
              <h2>Favorites page</h2>
      </Link>
    </AppBar>
  )
}
 
export default Navbar