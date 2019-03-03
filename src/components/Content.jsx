import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import preloaderHOC from './preloaderHOC/index'

import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'


class Content extends Component {


  addToFavorit = (id) => {
    this.props.addItem(id)
  }

  render() {
    const { item: { items: { artist = [] }}} = this.props.data
    return (
      <div>
        <h1>Artist List</h1>
        {artist.map(({ name, listeners }) => 
          <div key={listeners}>
            {name}
            <button 
              style={{marginLeft: '100px', background: 'green'}}
              onClick={(e) => this.addToFavorit(listeners, e)}
            >+</button>
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
  { addItem }
)(Content)
 
// const AdvContent = preloaderHOC('data')(Content)

// export default AdvContent

