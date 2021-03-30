import React, { useState } from 'react'

const Context = React.createContext({})

export function UIContextProvider({ children }) {
  const [keywordsSearch, setKeywordsSearch] = useState('')

  return (
    <Context.Provider value={{ keywordsSearch, setKeywordsSearch }}>
      {children}
    </Context.Provider>
  )
}

export default Context
