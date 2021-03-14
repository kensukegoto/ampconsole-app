import React , { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => {

  const [authState, setAuthState] = React.useState({ SignedIn: false });

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState) => {
      setAuthState(nextAuthState);
    })
  },[]);

  return authState === AuthState.SignedIn ? (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, Kensuke !</p>
        </header>
      </div>
      <AmplifySignOut/>
    </div>
  ) : (
    <AmplifyAuthenticator/>
  );
}

export default App;