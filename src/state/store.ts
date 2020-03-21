import { createStore, combineReducers } from 'redux'
import { State, reducers } from 'state'

const store = createStore(
  combineReducers<State>(reducers)
)

export default store
