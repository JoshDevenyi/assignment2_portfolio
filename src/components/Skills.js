import React from "react";
import axios from "axios";

class Skills extends React.Component{

    constructor(props) {

        super(props);
        this.state = {

            skills: []

        };
    }

    componentDidMount() {

        axios({
            url: "JSON/skills.json",
            method: "GET"
        })
        .then((res) => {
            this.setState({

                skills: res.data

            });
        });
    }

    render(){

        const { skills } =  this.state;
        
        return(

            <section id="skills">
                        
                <h2 className="sectionHeading">
                    
                    My Skills
                
                    <span className="fa-solid fa-laptop-code headingIcon"></span>
                
                </h2>
    
                <div></div>

                <div className="flexContainer skillsFlex" id="skillsRow">

                        {skills.map(s => (


                            <i className={s.icon +" icon skill"} aria-label={s.name} key={s.id}></i>


                        ))}
        
                </div>

            </section>
    
        );

    }

}

export default Skills;