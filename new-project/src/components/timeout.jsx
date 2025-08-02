import React from 'react'
import { useState } from 'react';

export default function Timeout() {
    const [count, counter] = useState(0)
    setTimeout(() => {
        counter(count + 1)
    }, 1000)
    return (
        <>
            <div>
                <p>{count}</p>
            </div>
        </>
    );
}