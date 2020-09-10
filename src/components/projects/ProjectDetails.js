import React from 'react'

const ProjectDetails = (props) => {
  // console.log(props);
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - { id }</span>
          <p>Lorem Ipsum is simply dummy tefefext of the printing
           and typesetting industry. Lorem Ipsum has been the
           industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an
            IFIFFI</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the next ninja</div>
          <div>2nd, September 4 Am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
