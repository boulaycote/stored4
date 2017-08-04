import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

interface AppProps { 
  cordova: boolean;
  electron: boolean;
}

interface AppState { }

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    let platform = <p>Running in Browser!</p>;

    if (this.props.cordova) {
      platform = <p>Running on Cordova!</p>;
    } else if (this.props.electron) {
      platform = <p>Running on Electron!</p>;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {platform}
      </div>
    );
  }
}

export {
  App,
  AppProps,
  AppState
};

export default App;
