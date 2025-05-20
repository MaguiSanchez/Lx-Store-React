import React from "react";
import "./styles/navbar.css"
import luxoriaLogo from "../../img/luxoria-blue3-bg.png"
import luxoriaLogobg from "../../img/logo-190525-sinbg.png"
import { Link } from "react-router-dom"

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
					<Link to={"/"}>
						<img src={luxoriaLogobg} alt="luxoria logo" width="80" height="70" className="d-inline-block align-text-top p-0"/>
					</Link>
				</div>
				{/* Btn hamburguesa */}
			</div>
			{/* <a className="btn btndesign btn-lg rounded-5 shadow-sm fw-semibold" href="" role="button" target="_blank" rel="noopener noreferrer">Lentes de sol</a> */}
			<Link to="/category" className="flex-sm-fill text-sm-center nav-link text-black fs-5 fw-semibold">Lentes de sol</Link>
            <Link to="/category" className="flex-sm-fill text-sm-center nav-link text-black fs-5 fw-semibold">Monturas</Link>
            <Link to="/category" className="flex-sm-fill text-sm-center nav-link text-black fs-5 fw-semibold">Zapatillas</Link>
			<Link to="/category" className="flex-sm-fill text-sm-center nav-link text-black fs-5 fw-semibold">Tecnología</Link>
            <Link to="/category" className="flex-sm-fill text-sm-center nav-link text-black fs-5 fw-semibold">Accesorios</Link>
            <Link to="/" className="flex-sm-fill text-sm-center nav-link text-black fs-5 fw-semibold">Nosotros</Link>
		</nav>
	);
};