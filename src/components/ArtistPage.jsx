import React, { Component } from 'react'


  // /2.0/?method=geo.gettopartists&country=spain&api_key=YOUR_API_KEY&format=json

class ArtistPage extends Component {
  state = {
    result: {},
  }

   componentDidMount(){
    const { name } = this.props.location.query
    fetch(`http://ws.audioscrobbler.com/2.0?method=artist.getinfo&artist=${name}&api_key=99f54fc50c9b7f9b745753341fc6d09d&format=json`)
    .then(res => res.json())
    .then(result => this.setResult(result))
    .catch(err => err)

    console.log(name)
   }

   setResult = (result) => {
    this.setState({result})
  }

  render() {
    const {result: { artist = {} }} = this.state
    const { name } = artist
    const { bio = {}} = artist
    const { content, published } = bio
    console.log(artist)
    
    return (
      <div>
        <h1>{name}</h1>
        <p>{content}</p>
        <p>{published}</p>
      </div>
    )
  }
}
 
export default ArtistPage