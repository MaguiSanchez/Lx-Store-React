import React, { useContext, useEffect, useState } from "react";

export const Navbar = () => {
	// const [viewChange, setViewChange] = useState(false)
	// const navigate = useNavigate()

	// const handleNav = () => {
	// 	setViewChange(!viewChange)
	// }

	return (
		<nav className=''>
			<div className="d-flex blur justify-content-between w-100 align-items-center p-2">
				<div className="d-flex justify-content-center align-items-center">
					<h2 className='mb-0'>Luxoria<span>Store</span></h2>
				</div>
				{/* Btn hamburguesa */}
				{/* <div className="btnNav transition-transform d-md-none">
					<input type="checkbox" id="lanzador" />
					<label htmlFor="lanzador" onClick={handleNav}>
						<span className="btnNav-linea"></span>
						<span className="btnNav-linea"></span>
						<span className="btnNav-linea"></span>
					</label>
				</div> */}
			</div>
		</nav>
	);
};