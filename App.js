/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import { Provider } from "react-redux";
 import { LogBox } from 'react-native';
 
 import store, {persistor} from './src/state/store';
 import {PersistGate} from 'redux-persist/lib/integration/react';
 import RootContainer from './src/RootContainer'
   
  LogBox.ignoreAllLogs();
  
  const App = () => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <RootContainer />
        </PersistGate>
      </Provider>
    );
  };
  
  export default App;
  