import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/CtxApp'

export default function Time() {
    const {favName,setFavName} = useContext(Context)
    const [info,setInfo] = useState()
    /* const [time,setTime] = useState([]) */

    const con = JSON.parse(localStorage.getItem('favorites'))
    
    const values = con.filter(function (a) {
        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null))
    
    
    /* setTime(values) */
    console.log(values)
    /* console.log(time) */
    return (
        <>
        </>
    )
}
