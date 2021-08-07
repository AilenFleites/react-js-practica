import React, { useState} from "react"
import { Precio } from "../Precio"

export const Form = () => {

    const [valor, setValor] = useState();
    const [moneda, setMoneda] = useState();
 console.log(valor,moneda)
    return (
        <form className="precio">
            <label>valor</label>
            <input type="number" name="valor" value={valor} onChange={(e) => setValor(e.target.value)}></input>
            <label>Moneda</label>
            <input type="text" name="moneda" value={moneda} onChange={(e) => setMoneda(e.target.value)}></input>
           <Precio valor={valor} moneda={moneda}></Precio>
        </form>
    )
}

