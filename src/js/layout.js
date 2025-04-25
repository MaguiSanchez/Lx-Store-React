import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
// import { Home } from "./views/home";
import { Home } from "./views/Home.jsx";
// import { Demo } from "./views/demo";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Category } from "./views/Category.jsx";
import { Details } from "./views/Details.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						{/* <Route path="/demo" element={<Demo />} /> */}
						<Route path="/category" element={<Category />} />
						<Route path="/details" element={<Details />} />
						<Route path="*" element={<h1>Not found OKI DOKI!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
