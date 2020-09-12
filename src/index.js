import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'; // ahhoz kell h készítsünk egy eltárolhassuk a rootreducert
// ahhoz h tudjuk használni a thunk-ot az applymiddlewaret be kell importálnunk
import rootReducer from './store/reducers/rootReducer'; 
import { Provider } from 'react-redux' // azért kell hogy a store-t vagyis állapotot tároljunk
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

