import React, { Component } from 'react'
import {Conf} from '../Conf/path'
import { Link } from 'react-router-dom'

const { BASE_PATH, API_KEY, METHOD, YOUR_API_KEY, FORMAT, COUNTRY, COUNTRY_NAME } = Conf

class DashboardPage extends Component {
  state = {
    result: {},
  }
  // /2.0/?method=geo.gettopartists&country=spain&api_key=YOUR_API_KEY&format=json

  componentDidMount(){
    fetch(`${BASE_PATH}/?${METHOD}&${COUNTRY}${COUNTRY_NAME}&${API_KEY}${YOUR_API_KEY}&${FORMAT}`)
    .then(res => res.json())
    .then(result => this.setResult(result))
    .catch(err => err)

  }

  setResult = (result) => {
    this.setState({result})
  }
  

  render() {
    const { result } = this.state
    const { topartists = {} } =  result
    const { artist = [] } =  topartists
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
 
export default DashboardPage