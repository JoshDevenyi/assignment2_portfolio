import React from "react";

class Contact extends React.Component {

    render(){
        return(

            <section id="contact">
    
                <h2 className="sectionHeading">
                    
                    Contact Me
                
                    <span className="fa-solid fa-face-smile headingIcon"></span>
                
                </h2>
    
                <div className="flexContainer" id="contactData">
    
                    <p id="email">joshdevenyi@hotmail.com</p>

                    <div className="linebreak"></div>
    
                    <a className="contactLink" href="https://www.linkedin.com/in/joshua-devenyi">
                        <i className="fab fa-linkedin icon"></i>
                    </a>
    
                    <a className="contactLink" href="https://github.com/JoshDevenyi">
                        <i className="fab fa-github-square icon"></i>
                    </a>
    
                    <a className="contactLink" href="https://twitter.com/jdevenyi">
                        <i className="fab fa-twitter-square icon"></i>
                    </a>
    
                    
                </div>
    
            </section>
        );

    }
}

export default Contact;