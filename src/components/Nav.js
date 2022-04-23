import React from "react";

function Nav() {

    return(

        <nav id="mainNavigation" aria-label="mainNavigation">
            <ul id="headerMenu" className="flexContainer">
                <li className="headerOption">
                    <a href="#work" className="headerLink">My Work</a>
                </li>
                <li className="headerOption">
                    <a href="#education" className="headerLink">My Education</a>
                </li>
                <li className="headerOption">
                    <a href="#contact" className="headerLink">Contact Me</a>
                </li>
            </ul>
        </nav>
    );

}

export default Nav;