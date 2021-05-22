import { combineReducers } from 'redux';
import reducerShowCase from '../components/showcase/slice'

export default function createReducer() {
  
    const rootReducer = combineReducers({
    
        showcase: reducerShowCase
    
  });

  return rootReducer;
}
