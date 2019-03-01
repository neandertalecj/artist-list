import React, { Component } from 'react'

// http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=99f54fc50c9b7f9b745753341fc6d09d&format=json
// API key	99f54fc50c9b7f9b745753341fc6d09d

class Content extends Component {
  state = {
    result: {},
  }

  componentDidMount(){
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=99f54fc50c9b7f9b745753341fc6d09d&format=json`)
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