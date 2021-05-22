import { combineReducers } from 'redux';
import reducerShowCase from '../components/showcase/slice'
import reducerCart from '../components/cart/slice'

export default function createReducer() {
  
    const rootReducer = combineReducers({
    
        showcase: reducerShowCase,
        cart: reducerCart
    
  });

  return rootReducer;
}
