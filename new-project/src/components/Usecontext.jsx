import { useContext, createContext } from "react";
import React from 'react'
export const Newname = createContext()
export function Child1() {
    const name = createContext(Newname)
    return (
        <>
            <div><h2>hello{name}</h2></div></>
    )
}
export function Child2() {
    const name = createContext(Newname)
    return (
        <>
            <div><h2>hello !{name}</h2></div></>
    )
}
