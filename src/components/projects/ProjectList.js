import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  // console.log(projects);
  return (
    <div className="project-list section">
      { projects && projects.map(project => { // double ampersand : ha a jobb oldal true (projects vagyis létezik) akkor végrehajtja a műveletet
      // ha viszont falsy (vagy is a project nem tartalmaz semmit akkor ) akkor nem hajtja végre a műveletet. circuit evauliation
        return (
          <Link to={`/project/${project.id}`} key={project.id} >
            <ProjectSummary project={project} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList;
