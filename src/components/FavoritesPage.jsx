import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { deleteItem } from '../actions/itemActions'

class FavoritesPages extends Component {

  removeFromFavorit = (id) => {
    this.props.deleteItem(id)
    console.log('remove', id)
  }

  render() {
    console.log(this.props.item.favorit)
    const { item: { favorit }} = this.props
    return (
      <div>
        <h1>Hello from Favorites pages</h1>
        {favorit.map(({ name, listeners }) => 
          <div key={listeners}>
            {name}
            <button 
              style={{marginLeft: '100px', background: 'red'}}
              onClick={(e) => this.removeFromFavorit(listeners, e)}
            >-</button>
            <Link to={{ pathname: '/artist_page', query: { name }}} >
              <br/>
              <button >Read more...</button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}
 
const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(
  mapStateToProps,
  { deleteItem }
)(FavoritesPages)