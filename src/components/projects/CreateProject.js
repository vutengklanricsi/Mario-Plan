import React, { Component } from 'react'

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  }
  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    // console.log(event)
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={ this.handleSubmit }>
          <h5 className="grey-text text -darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log in</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject
