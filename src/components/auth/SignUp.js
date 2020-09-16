import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
 

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    this.props.signUp(this.state)
  }
  render() {
    const {auth, authError} = this.props;
    if (auth.uid) return <Redirect to={'/'} />
      return (
        <div className="container">
          <form className="white" onSubmit={ this.handleSubmit }>
            <h5 className="grey-text text -darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={ this.handleChange } />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={ this.handleChange } />
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First Name: </label>
              <input type="text" id="firstName" onChange={ this.handleChange } />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last name: </label>
              <input type="text" id="lastName" onChange={ this.handleChange } />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
              <div className="red-text center">
                { authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

//* amikor regisztrálunk azonnal beloggol és így redirectel a főoldalra


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
