import React, { useState } from 'react'

const Context = React.createContext({})

export function SearchContextProvider({ children }) {
  const [keywords, setKeywords] = useState('')

  return (
    <Context.Provider value={{ keywords, setKeywords }}>{children}</Context.Provider>
  )
}

export default Context
