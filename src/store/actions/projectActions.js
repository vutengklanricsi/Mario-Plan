export const createProject = (project) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => { // make async call to database
    // const firebase = getFirebase();
    const firestore = getFirestore(); // referál a firestore adatbázisra
    const profile = getState().firebase.profile; // kinyerjük a profile adatokat a state-ből.
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({ // ez egy asynchronus hívás.Időbe telik neki
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastname, //! itt a console.log -on csekkold hogy mit kell írni (dashboard-ban console.log(state)
      authorId: authorId,
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
