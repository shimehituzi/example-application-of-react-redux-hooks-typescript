import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State, initialState, actions } from 'state'
import { Home } from 'views/components/home/Home'

type Type = {
  flag: State['example']['data']['flag']
}

const HomeContainer: React.FC = () => {
  const flag = useSelector<State, Type['flag']>(
    state => state.example.data.flag
  )

  const dispatch = useDispatch()
  const handleSetFlag = useCallback(
    (flag: Type['flag']) => {
      dispatch(actions.example.setFlag(flag))
    }, [dispatch]
  )

  useEffect(() => {
    return () => { handleSetFlag(initialState.example.data.flag) }
  }, [handleSetFlag])

  const props = { flag, handleSetFlag }

  return (
    <Home { ...props }/>
  )
}

export default HomeContainer
