import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'

const Navbar = (props) => {
  const {auth} = props;
  // console.log(auth)
  // console.log(auth.uid)
  const link = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Mario plan</Link>
        { link }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    auth : state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);
