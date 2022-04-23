import React from "react";
import Nav from "./Nav";

class Header extends React.Component {
    render() {
        return(

            <header id="header" className="flexContainer">
                <h2 id="siteName"><a href="/">Josh Devenyi</a></h2>
                <Nav id="nav"/>
            </header>

        );
    }
}
export default Header;