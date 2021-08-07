/*4- PuntajeItem y Puntaje
Crear un componente PuntajeItem que tome un prop tipo con los valores lleno o vacio y muestre un ícono de una estrella llena o vacía según el caso
*/
import React from "react"
import { Star } from "react-bootstrap-icons"
import { StarFill } from "react-bootstrap-icons"

export const PuntajeItem = ({tipo, colorItem})=>{ 
return (
<div style={{ color: `${colorItem}`, display: 'inline-flex' }}>
{tipo==='lleno' ? <StarFill/>: <Star/>}
</div>
)
} 