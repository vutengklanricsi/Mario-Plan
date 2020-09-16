import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";  // ahhoz kell h készítsünk egy eltárolhassuk a rootreducert
// ahhoz h tudjuk használni a thunk-ot az applymiddlewaret be kell importálnunk
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from 'react-redux' // azért kell hogy a store-t vagyis állapotot tároljunk.
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase , isLoaded} from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig) 
  )
);
// átadjuk a firebase-t és a firestore-t. withExtraArgument engedi hogy az action-be paramtéerként átadjuknk neki egy objektumot
// szeretnénk ha az app rácsatlakozna friebase project-hez. ezt úgy érjük el, hogy a store enhancer-t használjuk 
// az applymiddleware visszaad egy store enhancer-t mi hozzádhatunk több store-ehnhancer-t a store-hoz és azt a compose-al tesszük meg

const rrfProps = {
  firebase: firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  // userProfile: 'users', // where profiles are stored in database
  // presence: 'presence', // where list of online users is stored in database
  // sessions: 'sessions',
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) {
    return (
      <div>Loading Screen...</div>
    )
  }
  return children
}
// ez azt csinálja h nem rendereli ki a DOM-ba addig amíg a firebase nem lesz készen.Megvárja hogy beloggoljunk és utána rendereli ki.
//! http://react-redux-firebase.com/docs/recipes/auth.html#wait-for-auth-to-load
//! link a ahhoz, hogy ne renderelje ki bejelentkezésnél a másik komponenst.
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
