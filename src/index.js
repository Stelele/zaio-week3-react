import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import createReduxStore from './createReduxStore'
 import firebase from 'firebase/app'
import 'firebase/firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import{createFirestoreInstance} from 'redux-firestore'


const rrfConfig = { 
  userProfile: 'users',
  useFirestoreForProfile: true 
} // react-redux-firebase config


const store = createReduxStore()

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
   createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
