import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Useeffect() {


    const [count, counter] = useState(0)
    useEffect(() => {

       const co = setInterval(() => {
            counter(count + 1)
        }, 1000)

        return(()=>{
            clearInterval(co)
        })
    })


    function reset() {
        counter(count - count)

    }


    return (
        <>
            <div>
                <p>{count}</p>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}
