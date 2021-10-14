import { combineReducers } from 'redux';
import foodNameReducer from './main'

const rootReducer = combineReducers({
  foodNameReducer,
})

export default rootReducer;