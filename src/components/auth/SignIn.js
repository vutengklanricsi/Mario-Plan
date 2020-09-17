import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
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
    // console.log(this.state)
    this.props.signIn(this.state);
  }

  render() {
    const authError = this.props.authError;
    const {auth} = this.props;
    if (auth.uid) return <Redirect to={'/'} />
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
              <div className="red-text center">
                { authError ? <p>{authError}</p> : null }
              </div>
            </div>v
          </form>
        </div>
        )
      }
    }

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
