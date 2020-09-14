// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware, compose } from 'redux'; // ahhoz kell h készítsünk egy eltárolhassuk a rootreducert
// // ahhoz h tudjuk használni a thunk-ot az applymiddlewaret be kell importálnunk
// import rootReducer from './store/reducers/rootReducer'; 
// import { Provider } from 'react-redux' // azért kell hogy a store-t vagyis állapotot tároljunk
// import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig';

// const store = createStore(rootReducer, 
//   compose(
//   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//   reduxFirestore(fbConfig),
//   reactReduxFirebase(fbConfig),
//   )
// );
// // átadjuk a firebase-t és a firestore-t. withExtraArgument engedi hogy az action-be paramtéerként átadjuknk neki egy objektumot
// // szeretnénk ha az app rácsatlakozna friebase project-hez. ezt úgy érjük el, hogy a store enhancer-t használjuk 
// // az applymiddleware visszaad egy store enhancer-t mi hozzádhatunk több store-ehnhancer-t a store-hoz és azt a compose-al tesszük meg

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
//   ,
//     document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";  // ahhoz kell h készítsünk egy eltárolhassuk a rootreducert
// ahhoz h tudjuk használni a thunk-ot az applymiddlewaret be kell importálnunk
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from 'react-redux' // azért kell hogy a store-t vagyis állapotot tároljunk.
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
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
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
