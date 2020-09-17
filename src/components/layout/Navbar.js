import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth)
  // console.log(auth.uid)
  const link = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo" >Mario plan</Link>
        { link }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  // console.log(state.firebase.auth)
  return {
    auth : state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Navbar);
