import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import Router from './Router'
import store from './Store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
