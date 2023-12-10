import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles/Header.css";

export default function Header() {
    const [currentPath, setCurrentPath] = useState(useLocation().pathname);
    return (
        <header className="header">
            <Navigation currentPath={currentPath} setCurrentPage={setCurrentPath} />
        </header>
    )
}