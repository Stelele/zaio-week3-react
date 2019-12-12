import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'

import fbConfig from './config/fbConfig'
const initialState = {}

export default () => {
  return createStore(
    rootReducer,
    initialState,
       compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),// redux binding for firebase
        reduxFirestore(fbConfig, {userFirestoreForProfile: true, userProfile:'users', attachAuthIsReady: true}),
        //reactReduxFirebase() // redux bindings for firestore
       )
    ); 
}
