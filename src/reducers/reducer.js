import {combineReducers} from 'redux';
import dataReducer from './data_reducer.js';

export default combineReducers({
  data: dataReducer,
});

