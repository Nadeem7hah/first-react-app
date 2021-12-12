import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    // const {name, heroName} = this.props
    // console.log(this.props)
    // console.log(this.props.name)
    return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
  }
}

export default Welcome