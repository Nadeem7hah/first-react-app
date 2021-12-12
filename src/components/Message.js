import React, { Component } from 'react'

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: props.message
    }

  }

  changeMessage() {
    // this.state.message = "HI"
    // console.log(this.state.message)
    this.setState({
      message: 'Thank you for subscribing!'
    }, ()=>{ console.log(this.state.message)})
   

  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={ () => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message