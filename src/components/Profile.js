import React from "react";

class Profile extends React.Component {

    render(){

        return(

            <section id="profile" className="flexContainer">
    
                <div id="textBox">
    
                    <div className="flexContainerCol">
                        
                        <h1 id="textHeading">Who is Josh?</h1>
                    
                        <p id="textContent">
                            I'm a 
                            <strong> Web Developer </strong>
                            based out of Toronto, Ontario, 
                            with a background in film production and visual effects. 
                            I’ve spent my career exploring creativity and am a strong believer 
                            that the best work is accomplished through collaboration.
                        </p>
    
                    </div>
    
                </div>

                <div id="imageBox">
        
                        <div className="flexContainerCol imageFlex">
        
                            <img id="profileImage" src="images/JoshSquare.jpg" alt="Josh Devenyi" width="300"/>
        
                        </div>

                </div>
    
            </section>
        );

    }

}

export default Profile;