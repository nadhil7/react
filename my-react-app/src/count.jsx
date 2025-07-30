import { useState } from "react";
export default function Count() {
    const [count, setcount] = useState(0)
    function add(){
        setcount(count+1)
    }
     function sub(){
        setcount(count-1)
    }
     function reset(){
        setcount(count-count)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={sub}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={add}>+</button>
        </div>
    );
}