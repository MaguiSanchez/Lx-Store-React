import React, { useContext, useEffect, useState } from "react";
import { Brands } from "../component/Brands.jsx";
import { SectionCategory } from "../component/SectionCategory.jsx";
import { Jumbotron } from "../component/Jumbotron.jsx";

export const Home = () => {
    return(
        <div>
            <h1>Holi Home</h1>
            <div className="text-center">
			    <Jumbotron/>
                <SectionCategory/>
                <Brands/>
		    </div>
        </div>  
    );
};