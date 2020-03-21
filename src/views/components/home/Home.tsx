import React from 'react'
import { State } from 'state'

type Type = {
  flag: State['example']['data']['flag']
}

type OwnProps = {
  flag: Type['flag']
}

type Handler = {
  handleSetFlag: (
    (flag: Type['flag']) => void
  )
}

type Props = OwnProps & Handler

export const Home: React.FC<Props> = props => {

  const setFlagFunc = (flag: Type['flag']) => () => {
    props.handleSetFlag(flag)
  }

  const showFlagResult = ():JSX.Element => {
    if (props.flag) {
      return <div>◯</div>
    } else {
      return <div>×</div>
    }
  }

  return (
    <React.Fragment>
      <button onClick={setFlagFunc(true)}>true</button>
      <button onClick={setFlagFunc(false)}>false</button>
      { showFlagResult() }
    </React.Fragment>
  )
}
