import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
 const [expandNavbar, setExpandNavbar] = useState(false);

 const location = useLocation();

 useEffect(() => {
   setExpandNavbar(false);
 }, [location]);

 return (
   <div className="navbar" id={expandNavbar ? "open" : "close"}>
     <div className="toggleButton">
       <button
         onClick={() => {
           setExpandNavbar((prev) => !prev);
         }}
       >
         <ReorderIcon />
       </button>
     </div>
     <div className="links">
     <Link to="/about"> About </Link>
       <Link to="/projects"> Projects </Link>
       <Link to="/contact"> Contact </Link>
       <Link to="/resume"> Resume </Link>
     </div>
   </div>
 );
}

export default Navbar;
 
