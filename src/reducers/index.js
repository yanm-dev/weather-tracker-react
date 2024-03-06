import { combineReducers } from 'redux';
import locationsReducer from './locationReducer';

const rootReducer = combineReducers({
  locations: locationsReducer
});

export default rootReducer;
