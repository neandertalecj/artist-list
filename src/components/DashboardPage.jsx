import React, { Component } from 'react'
import {Conf} from '../Conf/path'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'

// const { BASE_PATH, API_KEY, METHOD, YOUR_API_KEY, FORMAT, COUNTRY, COUNTRY_NAME } = Conf

class DashboardPage extends Component {

  // /2.0/?method=geo.gettopartists&country=spain&api_key=YOUR_API_KEY&format=json

  componentDidMount(){
    this.props.getItems()
  }

  render() {
    const { item: { items: { artist = [] }}} = this.props
    console.log(artist)
    return (
      <div>
        <h1>Artist List</h1>
        {artist.map(({ name, listeners }) => 
          <div key={listeners}>
            {name}
            <Link to="/artist_page">Read more...</Link>
            
          </div>
        )}
      </div>
      
    )
  }
}
 
// export default DashboardPage

const mapStateToProps = (state) => ({
  item: state.item
})

// export default ShoppingList
export default connect(
  mapStateToProps,
  { getItems }
)(DashboardPage)