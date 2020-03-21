import * as Example from 'state/example'

export type State = {
  example: Example.State
}

export const initialState = {
  example: Example.initialState,
}

export const actions = {
  example: Example.actions,
}

export const reducers = {
  example: Example.reducer,
}
