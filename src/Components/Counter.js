import React, {useState, useEffect} from 'react'

function Counter() {
    const [count, setCounter] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])


    return (
        <div>
            <p>{count}</p>
            <span><button onClick={() => setCounter(count + 1)}>click me</button></span>
        </div>
    )
}

export default Counter;
