import React, { Component } from 'react'
import {Conf} from '../Conf/path'

const { BASE_PATH, API_KEY, ARTIST_NAME, METHOD, ARTIST, YOUR_API_KEY, FORMAT } = Conf

class Content extends Component {
  state = {
    result: {},
  }

  componentDidMount(){
    fetch(`${BASE_PATH}/?${METHOD}&${ARTIST}${ARTIST_NAME}&${API_KEY}${YOUR_API_KEY}&${FORMAT}`)
    .then(res => res.json())
    .then(result => this.setResult(result))
    .catch(err => err)

  }

  setResult = (result) => {
    this.setState({result})
  }
  

  render() {
    const { result } = this.state
    const { results = {} } =  result
    const{ artistmatches = {} } =  results
    const { artist = [] } =  artistmatches
    console.log(artist)
    return (
      <div>
        <h1>Artist List</h1>
        {artist.map(({ name, listeners }) => 
          <div key={listeners}>{name}</div>
        )}
      </div>
      
    )
  }
}
 
export default Content;