import React from 'react';
import moment from 'moment'

const ProjectSummary = ({project}) => {
  // console.log(project)
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
        </div>
      </div> 
    </div>
  )
}

export default ProjectSummary

// project.createdAt.toDate() így egy objektumot kapunk meg
//* project.createdAt.toDate().toString() nagyon hosszú dátumot kapunk napra másodpercre pontosan.
//* moment.js-el lehet szép formátumot választami neki