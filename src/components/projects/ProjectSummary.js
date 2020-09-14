import React from 'react'

const ProjectSummary = ({project}) => {
  // console.log(project)
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
          <p className="grey-text">3rd September, 3 Am </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
