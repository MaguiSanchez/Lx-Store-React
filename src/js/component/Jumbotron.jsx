import React, { useContext, useEffect, useState } from "react";

export const Jumbotron = () => {
    return(
        <div>
            <div class="jumbotron bg-light p-5 my-4">
                <h1 class="display-3 p-3">Luxoria Store</h1>
                <p class="lead fs-4 p-3">Rendimiento, estilo y tecnología en un solo lugar. Equípate con lo mejor en deporte, luce con exclusividad y potencia tu mundo con innovación. Encuentra lo que necesitas, sin límites.</p>
                <a class="btn btn-info btn-lg rounded-5 shadow-sm" href="https://wa.me/51953633963?text=Hola%2C%20quiero%20ver%20el%20catálogo" role="button" target="_blank" rel="noopener noreferrer">Pedir Catálogo</a>
            </div>
        </div>
    );
};