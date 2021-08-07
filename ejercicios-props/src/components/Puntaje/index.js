/*Crear un componente Puntaje que tome un prop puntaje que sea del 1 al 5 y renderice 5 estrellas, 
siendo valor de score la cantidad de PuntajeItem con tipo lleno, mientras las restantes son tipo vacio, 
por ejemplo: ★★★✩✩
Pueden usar íconos de FontAwesome, Bootstrap, Material o emojis*/
import React from "react"
import {PuntajeItem} from "../PuntajeItem"

export const Puntaje = ({puntaje}) =>{
return (
    <div>
       
{ [0,1,2,3,4].map((value) => {
   return <PuntajeItem tipo={puntaje <= value ? "vacio" : "lleno"} colorItem="coral"/>
})}

<p>El puntaje es {puntaje} de 5</p>
    </div>
    

)
}