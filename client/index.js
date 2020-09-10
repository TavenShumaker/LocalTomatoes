import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
//import rootReducer from './reducers';
import App from './App.jsx';
import './styles.css'

//const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)