import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  console.log(projects);
  return (
    <div className="project-list section">
      { projects && projects.map(project => { // double ampersand : ha a jobb oldal true (projects vagyis létezik) akkor végrehajtja a műveletet
      // ha viszont falsy (vagy is a project nem tartalmaz semmit akkor ) akkor nem hajtja végre a műveletet. circuit evaultion
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}
    </div>
  )
}

export default ProjectList;
