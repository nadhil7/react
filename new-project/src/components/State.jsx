import { useState } from "react";
import React from 'react'

function State() {
    const [text, settext] = useState("")
    const changer = (e) => {
        settext(e.target.value)
    }
    return (

        <>
            <input value={text} onChange={changer} type="text" />
            <h1>{text}</h1>
        </>
    )
}

export default State