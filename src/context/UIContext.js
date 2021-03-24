import React, { useState } from 'react'

const Context = React.createContext({})

export function UIContextProvider({ children }) {
  const [keywords, setKeywords] = useState('')

  return (
    <Context.Provider value={{ keywords, setKeywords }}>
      {children}
    </Context.Provider>
  )
}

export default Context
