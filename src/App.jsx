import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import InviteContainer from './containers/Invite'
import store from './store'
import './stylesheets/main.scss'


render(
  <Provider store={store}>
    <InviteContainer/>
  </Provider>,
  document.getElementById('root')
)
