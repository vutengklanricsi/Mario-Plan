export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err: err })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGN_OUT_SUCCESS'})
    })
    firebase.logout()
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase(); //* for signing new user up. create a newuser
    const firestore = getFirestore(); //* get user from database? create a record for a userr just signe up

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((response) => { //* doc- ezzel tudunk referálni - nem akarunk egy másik autgenerált id-t. szeretnénk,ha a firebase hozzárendelje az id-t a userhez.
      //* így szyncelve lesznek egymáshoz
      return firestore.collection('users').doc(response.user.uid).set({ 
        firstName: newUser.firstName,
        lastName: newUser.lastname,
        initials: newUser.firstName[0] + newUser.lastName[0]
        //* most tároljuk az adatokat az új dokumentumunkba
        //* collection('users') ez nem létezik a firebase-ben de ha adtunk neki adatot akkor a firebase megcsinálja
        //* response.user.id megkapjuk az id-t a usertől amleyet generált a firebase.auth.createuseerwithemailandpassword.
        //* ebből meg kreálunk egy új dokumentumot az id-val amit kaptunk a firebase.auth.createuseerwithemailandpassword-tól és így azaonos lesz a két id
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS'})
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err: err})
    })
  }
}

//! a firestore-al adatot tudunk feltölteni a 