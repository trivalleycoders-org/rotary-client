import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';
// import Lato from './fonts/Lato/Lato-Regular.ttf'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
  body {
    color: rgb(225, 225, 225);
    background-color: #2f363d;
    padding: 0 5%;
    margin: 0;
    font-family: 'Lato', sans-serif;
    margin-bottom: 100px;
  }
`
