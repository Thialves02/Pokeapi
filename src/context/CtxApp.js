import React, { useState } from 'react'
import { createContext } from 'react'

const Context = createContext()

export default function CtxApp({children}) {
    const [data,setData] = useState([])
    const [favName,setFavName] = useState([])

    return (
        <Context.Provider value={{data,setData,favName,setFavName}}>
            {children}
        </Context.Provider>
    )
}

export { Context, CtxApp }