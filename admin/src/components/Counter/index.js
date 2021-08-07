import React, {useState} from "react";

export const Counter = () =>{

    const [contador, setContador] = useState(0);

    const handleInput = (e)=>{
       setContador(e.target.value);
    };

    const resta = ()=>{
     setContador(contador-1)
    }

    const suma = ()=> {
        setContador(contador+1)
    }
    return (
        <div>
            <button onClick={suma}>+</button>
            <input type="number" onChange={handleInput}></input>
            <button onClick={resta}>-</button>
            <h2>result: {contador}</h2>
        </div>
    )
}