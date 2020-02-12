import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'

const HTMLDOM = document.querySelector('#root')

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  HTMLDOM
)
