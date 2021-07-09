import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import FirebaseContext from './Context/Firebase'
import { firebase, FieldValue, timestamp } from './lib/firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue, timestamp }}>
    <App />
     </FirebaseContext.Provider>,
  document.getElementById('root')
);