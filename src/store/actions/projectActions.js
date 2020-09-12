export const createProject = (project) => {
  return (dispatch, getState) => { // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project: project });
    // MEGKAPJUK A PROJECT-ET és hozzáadhatjuk az adatbázishoz és egy asynchron hívást csinálni(tenni)
    // és azután dispatcheljük a jelenlegi action-t
  }
}
