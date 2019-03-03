import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import { Home } from '@material-ui/icons'
import styled from 'styled-components'


const Navbar = () => {
  return (
    <AppBar color="primary" position="static">
      <NavWrapper>
        <Toolbar>
          <Grid container>
          <Grid item xs={1}>
              <Link to="/" className="nav-link">
                {/* <Typography variant="h6" color="inherit"> */}
                  <Home />
                {/* </Typography> */}
              </Link>
            </Grid>
            <Grid item xs={5}>
              <Link to="/" className="nav-link">
                <Typography variant="h6" color="inherit">
                  home
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6} sm={6}>  
              <Link to="/favorites_page" className="nav-link">
                <Typography variant="h6" color="inherit">
                  favorites
                </Typography>
              </Link>
            </Grid>
          </Grid>
         </Toolbar>
      </NavWrapper>
    </AppBar>
  )
}

const NavWrapper = styled.nav`
.nav-link{
    color: white !important;
    text-transform: capitalize;
    text-decoration: none;
}`

export default Navbar
