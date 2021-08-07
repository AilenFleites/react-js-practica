import React from "react";

export const Fecha = ({date}) =>{
    let fechaParceada = new Intl.DateTimeFormat("es-ES",
    {dateStyle: "full",
    timeStyle: "full"}).format(date)

    return (
        <p>{fechaParceada}</p>
    )
}