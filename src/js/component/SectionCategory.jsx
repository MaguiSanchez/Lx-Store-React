import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SectionCategory = () => {
    return(
        <div>
            <h3>Categorias</h3>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/category"><img src="https://picsum.photos/id/64/200/200" className="rounded-4" alt="" /></Link>
                        {/* <Link to="/category" className="text-black"> */}
                        <p className="fw-bold fs-5">Lentes de Sol</p>
                        {/* </Link> */}
                    </div>
                    <div className="col">
                        <Link to="/category">
                            <img src="https://picsum.photos/id/201/200/200" className="rounded-4" alt="" />
                        </Link>    
                        <p className="fw-bold fs-5">Monturas</p>
                    </div>
                    <div className="col">
                        <Link to="/category">
                            <img src="https://picsum.photos/id/817/200/200" className="rounded-4" alt="" />
                        </Link>
                        <p className="fw-bold fs-5">Zapatillas</p>
                    </div>
                    <div className="col">
                        <Link to="/category">
                            <img src="https://picsum.photos/id/60/200/200" className="rounded-4" alt="" />
                        </Link>
                        <p className="fw-bold fs-5">Tecnologia</p>
                    </div>
                    <div className="col">
                        <Link to="/category">
                            <img src="https://picsum.photos/id/26/200/200" className="rounded-4" alt="" />
                        </Link>
                        <p className="fw-bold fs-5">Accesorios</p>
                    </div>
                </div>
            </div>
        </div>
    );
};