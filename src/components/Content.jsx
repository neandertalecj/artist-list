import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import preloaderHOC from './preloaderHOC/index'


class Content extends Component {
  render() {
    const { item: { items: { artist = [] }}} = this.props.data
    return (
      <div>
        <h1>Artist List</h1>
        {artist.map(({ name, listeners }) => 
          <div key={listeners}>
            {name}
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

 
const AdvContent = preloaderHOC('data')(Content)

export default AdvContent