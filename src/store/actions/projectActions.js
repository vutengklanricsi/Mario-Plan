const createProject = (project) => {
  // return {
  //   type: 'ADD_PROJECT',
  //   project: project,
  // }
  return (dispatch, getState) => { // make async call to database
    dispatch({ type: 'ADD_PROJECT', project: project }); // MEGKAPJUK A PROJECT-ET és hozzáadhatjuk az adatbázihoz és egy asynchron hívást csinálni(tenni)
    // és azután dispatcheljük a jelenlegi action-t
  }
}


export default createProject;
