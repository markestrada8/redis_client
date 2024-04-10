import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllLinks extends Component {
  constructor() {
    super()

    this.state = {
      data: []
    }

    this.displayLinks = this.displayLinks.bind(this)
  }

  displayLinks() {
    return this.state.data.map((item) => {
      return (
        <div key={item.link}>
          <Link to={{ pathname: item.url }} target="_blank">
            {item.link}
          </Link>
        </div>
      )
    })
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/url/get')
      .then(res => {
        const response = res.data
        this.setState({
          data: response
        })
        console.log(response)
      })
      .catch(error => {
        console.log('Get links request error', error)
      })
  };


  render() {

    return (
      <div>
        <h1>All Links</h1>
        <div className="links-wrapper">


          {this.displayLinks()}
        </div>
      </div>
    )
  }
}