import React, {useState} from 'react'

function Fruits() {
  const  [fruit, setFruit] = useState('Apple');
  const [curFruit, setCurFruit] = useState('');
  const updateFruit = () => {
    setFruit(curFruit);
  } 
  function updateCurFruit(event) {
    const curInp = event.target.value;
    setCurFruit(curInp);
  }
  return (
    <div>
        <p>The value of fruit is: {fruit}</p>
        <input type="text" onChange={updateCurFruit}/>
        {/* <button onClick={updateFruit('Banana')}>Banana</button>
        <button onClick={()=>setFruit('Mango')}>Mango</button> */}
        <button onClick={()=>updateFruit()}>Submit</button>
    </div>
  );
}

export default Fruits