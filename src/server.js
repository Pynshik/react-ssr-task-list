import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import configureStore from './redux/store'
import App from './App'
import { StaticRouter } from 'react-router';


export default function render(initialState, url) {
  const store = configureStore(initialState)

  const context = {};

  let content = renderToString(
    <Provider store={store} >
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState()

  return {content, preloadedState};
}