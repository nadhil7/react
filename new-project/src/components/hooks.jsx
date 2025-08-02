import React from 'react'
import { useState } from 'react'

function Hooks() {
    let [counter, setcounter] = useState(0)

    function add() {
        setcounter(counter + 1)
    }
    function dec() {
        setcounter(counter - 1)
    }
    function zero() {
        setcounter(counter - counter)
    }
    return (
        <>
            <div className='' style={{ display: "flex" }}>
                <button onClick={add}>increase</button>
                <p style={{width:"20px",padding:"10px"}}>{counter}</p>
                <button onClick={dec}>decrease</button>
            </div>
            <button onClick={zero}>restart</button></>
    )
}

export default Hooks