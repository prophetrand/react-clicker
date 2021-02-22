import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div>
            <nav className="navbar nav-justified">
                <ul>
                    <a className="navbar-brand" href="/">Clicker Game</a>
                </ul>
            </nav>
            <header>
                <h1>Welcome to the React-powered Clicker Game!</h1>
                <h2>Don't you dare click any image more than once...</h2>
            </header>
        </div>
    )
}

export default Navbar;