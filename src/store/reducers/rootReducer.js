import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux'; // kombinálja a reducerenket eggyé
import { firestoreReducer } from 'redux-firestore' // ez azért van hogy syncing (szinkornban legyen) a firestore adata a state-el.
import { firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer, // a firestore reducer automatikusan szinkronba lép a propertyvel a state object-el az adattal az adatbázisban.
  // ez visszaadja azt az adatot
  // független lesz h melyik komponens lesz aktív és hogy melyik adatra van szüksége a komponensnek, ez az adat lesz szinkronban a state-el a reducer által.
  // rá kell kapcsolni egy komponenst a egy final collection-el
  firebase: firebaseReducer, // firebasereducer - kisync-el a status-el a firebase-ben redux-al a state-be és a firebase objektumba a state-en??
  // amikor kijelentkezünk vagy bejelentkezünk akkor a firebasereducer mindig frissíteni fogja az állapotot
})

export default rootReducer;
