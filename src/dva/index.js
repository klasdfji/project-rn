
import React from 'react'
import { create } from 'dva-core'
import { Provider, connect } from 'react-redux'

export { connect }

export default function(options) {
  const app = create(options)
  // HMR workaround
  if (!global.registered) options.models.forEach(model => app.model(model))
  global.registered = true

  app.start()
  // eslint-disable-next-line no-underscore-dangle
  const store = app._store

  app.start = container => () => <Provider store={store}>{container}</Provider>
  app.getStore = () => store

  return app
}
export { NavigationActions, StackActions } from 'react-navigation'

// export { default as Storage } from './storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })