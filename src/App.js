import React , { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';

import awsconfig from './aws-exports';
import {API} from 'aws-amplify';

import axios from "axios";

Amplify.configure(awsconfig);

const App = () => {

  const [authState, setAuthState] = React.useState({ SignedIn: false });

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState) => {
      setAuthState(nextAuthState);
    })
  },[]);

  const callAmplifyAPI = () => {
    API.get('todos','items', {});
  }

  const callSlsAPI = () => {
    axios
      .get('https://eiyhektgi7.execute-api.us-east-1.amazonaws.com/dev/todos')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return authState === AuthState.SignedIn ? (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, Kensuke !</p>
          <button onClick={callAmplifyAPI}>Call Amplify Rest API</button>
          <button onClick={callSlsAPI}>Call Serverless Endpoint</button>
        </header>
      </div>
      <AmplifySignOut/>
    </div>
  ) : (
    <AmplifyAuthenticator/>
  );
}

export default App;