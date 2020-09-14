export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => { // make async call to database
    const firestore = getFirestore(); // referál a firestore adatbázisra
    firestore.collection('projects').add({ // ez egy asynchronus hívás.Időbe telik neki
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date(),
    }).then(() => {//referálunk projects nevű collection-re . hozzáadunk egy egy új dokumentumot az add funkcióval a collection-be.
      // egy objektumot adunk át neki, ami a dokumentumra referál amit hozzáadunk a collection-be  
      dispatch({ type: 'CREATE_PROJECT', project: project });
    // MEGKAPJUK A PROJECT-ET és hozzáadhatjuk az adatbázishoz és egy asynchron hívást csinálni(tenni)
    // és azután dispatcheljük a jelenlegi action-t
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err: err });
    })
        
  }
}
