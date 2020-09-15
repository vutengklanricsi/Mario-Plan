import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  // console.log(props.match.params)
  // console.log(props);
  const { project } = props;
  if ( project ) {
    return (
    <div className="container section project-details">
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
        <div>2nd, September 4 Am</div>
      </div>
    </div>
  </div>
  )} else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id =  ownProps.match.params.id;
  // console.log(id)
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  // console.log(state.firestore.data.projects); // ez a dokumentum id-ja itt az objektumot fogjuk visszakapni amiben benne van a (projekt neve , szerzője stb..)
  // console.log(project);
  return {
    project: project
  }
}

export default compose(connect(mapStateToProps), firestoreConnect(() => 
  ['projects']
))(ProjectDetails);
