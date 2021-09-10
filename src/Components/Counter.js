import React, {useState} from 'react'

function Counter() {
    const [count, setCounter] = useState(0)
    incrementClick = () => {
        
    }
    return (
        <div>
            <p>{count}</p>
            <span><button onClick={() => setCounter(count + 1)}></button></span>
        </div>
    )
}

export default Counter;
