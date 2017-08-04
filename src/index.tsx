import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, AppProps } from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function bootstrap({ cordova, electron }: AppProps) {
  ReactDOM.render(
    <App cordova={cordova} electron={electron} />,
    document.getElementById('root') as HTMLElement
  );
  registerServiceWorker();
}

declare global {
  interface Window { 
    bootstrap: Function;
    cordova: {
      version: string
    };
  }
}

window.bootstrap = window.bootstrap || bootstrap;

export default bootstrap;
