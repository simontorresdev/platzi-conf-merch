import React from 'react'
import useInitialState from '../hooks/useInitialState'

export const AppContext = React.createContext({})

export const AppProvider = ({ children }) => {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      {children}
    </AppContext.Provider>
  )
}
