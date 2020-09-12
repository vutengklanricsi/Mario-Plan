import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux'; // kombinálja a reducerenket eggyé

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
})

export default rootReducer;
