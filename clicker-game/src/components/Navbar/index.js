import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div>
            <nav className="navbar nav-justified">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Titan Clicker</a>
                    <span className="navbar-text">bobobo</span>
                    <span className="navbar-text">
                        Score: {props.score} \~/\~/ High Score: {props.topScore}
                    </span>
                </div>
            </nav>
            <header>
                <h1>Welcome to the React-powered clicky-game of Titanic proportions!</h1>
                <h2>Don't you dare click any image more than once...</h2>
            </header>
        </div>
    )
}

export default Navbar;