import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'
// import { injectGlobal } from 'styled-components'
import AppWrapper from './App/AppWrapper'
// import Lato from './fonts/Lato/Lato-Regular.ttf'

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppWrapper />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()

// injectGlobal`
//   body {
//     color: rgb(225, 225, 225);
//     background-color: #2f363d;
//     padding: 0 5%;
//     margin: 0;
//     font-family: 'Lato', sans-serif;
//     margin-bottom: 100px;
//   }
// `
