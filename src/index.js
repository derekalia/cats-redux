import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/reducer';
import thunk from 'redux-thunk';



// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

const store = applyMiddleware(thunk)(createStore)(reducers);

// const store = createStore(reducers);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



