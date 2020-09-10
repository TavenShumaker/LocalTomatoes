import { createStore, applyMiddleware } from 'redux'; //apply middleware lets our middleware funciton
import { composeWithDevTools } from 'redux-devtools-extension'; //lets us debug state with devtools
import thunk from 'redux-thunk';//allows us to use async logic that interacts with the store
import reducers from './reducers/index';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
