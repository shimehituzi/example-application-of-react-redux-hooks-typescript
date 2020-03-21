import { actionCreatorFactory } from 'typescript-fsa'
import { State } from 'state/example'

type Type = {
  flag: State['data']['flag']
}

const actionCreator = actionCreatorFactory('EXAMPLE')

export const actions = {
  setFlag: actionCreator<Type['flag']>('SET_FLAG'),
}
