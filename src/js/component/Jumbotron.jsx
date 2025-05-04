import React, { useContext, useEffect, useState } from "react";
import "./styles/jumbotron.css"

export const Jumbotron = () => {
    return(
        <div>
            <div className="jumbotron jumbotrondesign p-5 my-4">
                <h1 className="display-3 p-3">Luxoria Store</h1>
                <p className="lead fs-4 p-3">Rendimiento, estilo y tecnología en un solo lugar. Equípate con lo mejor en deporte, luce con exclusividad y potencia tu mundo con innovación. Encuentra lo que necesitas, sin límites.</p>
                <a className="btn btndesign btn-lg rounded-5 shadow-sm fw-semibold" href="https://wa.me/51953633963?text=Hola%2C%20quiero%20ver%20el%20catálogo" role="button" target="_blank" rel="noopener noreferrer">Pedir catálogo</a>
            </div>
        </div>
    );
};