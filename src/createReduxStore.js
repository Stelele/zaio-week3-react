import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import fbConfig from './config/fbConfig'
const initialState = {}

export default () => {
  return createStore(
    rootReducer,
    initialState,
      compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore})),// redux binding for firebase
        reduxFirestore(fbConfig) // redux bindings for firestore
      )
    ); 
}
