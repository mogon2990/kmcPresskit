import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import history from './history'
import ScrollToTop from './components/util/ScrollToTop'
import Main from './main.js'

ReactDOM.render(
  <Router history={history}>
      <ScrollToTop>
          <Main />
      </ScrollToTop>
  </Router>,
  document.getElementById('app')
)
