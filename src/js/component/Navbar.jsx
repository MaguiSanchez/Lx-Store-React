import React, { useContext, useEffect, useState } from "react";
import "./styles/navbar.css"
import luxoriaLogo from "../../img/luxoria-blue3-bg.png"

export const Navbar = () => {
	// const [viewChange, setViewChange] = useState(false)
	// const navigate = useNavigate()

	// const handleNav = () => {
	// 	setViewChange(!viewChange)
	// }

	return (
		<nav className="nav navbardesign d-flex flex-column align-items-center flex-sm-row sticky-sm-top">
			<div className="d-flex justify-content-between align-items-center p-2">
				<div className="d-flex justify-content-center align-items-center">
					<img src={luxoriaLogo} alt="luxoria logo" width="150" height="70" className="d-inline-block align-text-top p-0"/>
				</div>
				{/* Btn hamburguesa */}
			</div>
			<a className="flex-sm-fill text-sm-center nav-link text-black fs-5" href="#Characters">Lentes de sol</a>
            <a className="flex-sm-fill text-sm-center nav-link text-black fs-5" href="#Planets">Monturas</a>
            <a className="flex-sm-fill text-sm-center nav-link text-black fs-5" href="#Vehicles">Zapatillas</a>
			<a className="flex-sm-fill text-sm-center nav-link text-black fs-5" href="#Characters">Tecnologia</a>
            <a className="flex-sm-fill text-sm-center nav-link text-black fs-5" href="#Planets">Accesorios</a>
            <a className="flex-sm-fill text-sm-center nav-link text-black fs-5" href="#Vehicles">Nosotros</a>
		</nav>
	);
};