import React from 'react'
import { useState, useEffect } from 'react'

function Effect() {
    const [count, setcount] = useState(0)
   const counter = useEffect(() => {
        const clear =setTimeout(() => {
            setcount(c => c + 1)
        }, 1000)
        return()=>{
            clearTimeout(clear)
        }
    },[count])
    return (
        <>
            <div>{count}</div>
            <button onClick={counter}>count</button>
        </>
    )
}

export default Effect