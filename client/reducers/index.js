import { combineReducers } from 'redux';
import marketsReducer from './marketsReducer';

export default combineReducers({
  markets: marketsReducer,
})