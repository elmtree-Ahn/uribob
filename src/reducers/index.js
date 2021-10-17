import { combineReducers } from 'redux';
import searchModalReducer from './main'

const rootReducer = combineReducers({
  searchModalReducer,
})

export default rootReducer;