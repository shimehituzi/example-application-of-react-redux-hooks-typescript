import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState, actions } from 'state/example'

export const reducer = reducerWithInitialState(initialState)
  .case(actions.setFlag, (state, payload) => {
    return {
      ...state,
      data: {
        ...state.data,
        flag: payload
      }
    }
  })
