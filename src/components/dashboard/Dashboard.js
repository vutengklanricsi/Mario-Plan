import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    // console.log(this.props.projects);
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={ projects }/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    // projects: state.project.projects
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  firestoreConnect(() => // ez a függvény fog egy array-t paraméterként. ez az array objektumokat fog tartalmazni és ez a obj. megmondja hogy melyik collection-höz
  // szeretne csatlakozni
    ['projects']   // amikor ez a komponens aktív a collection amire hallgat az a project collection, és amikor ez a komponens betölt 
    //amikor a firestore adat betölt vagy amikor megváltozik az adatbázisban online, ez előidézi hogy a firestore reducer hogy synceljen a store-nak az state-jével
    // annak a state-nek a projektnek a collection-ével a firestore-ban
  ),
  connect(mapStateToProps))(Dashboard);
