import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    function updateCount() {
        setCount(count+1);
        console.log('The value of count is',count);
    }
  return (
    <div>
        <p>The value of count is: {count}</p>
        <button onClick={updateCount}>Increment</button>    
    </div>
    
  )
}

export default Counter