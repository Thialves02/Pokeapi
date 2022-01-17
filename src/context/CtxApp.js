import React, { useState } from 'react'
import { createContext } from 'react'

const Context = createContext()

export default function CtxApp({children}) {
    const [data,setData] = useState([])

    return (
        <Context.Provider value={{data,setData}}>
            {children}
        </Context.Provider>
    )
}

export { Context, CtxApp }