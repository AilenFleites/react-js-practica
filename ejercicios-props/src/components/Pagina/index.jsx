import React from "react";

export const Pagina = ({actual, maximo}) =>{
    return (
        <div className="btn-group">
            <button className="btn btn-outline-info">Previous</button>
            <button className="btn btn-outline-info">1</button>
            <button className="btn">...</button>
            <button className="btn btn-info">{actual}</button>
            <button className="btn">...</button>
            <button className="btn btn-outline-info">{maximo}</button>
            <button className="btn btn-outline-info">Next</button>
        </div>
    )
}