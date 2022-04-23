import React from "react";
import axios from "axios";

class Education extends React.Component{

    constructor(props) {

        super(props);
        this.state = {

            education: []

        };
    }

    componentDidMount() {

        axios({
            url: "JSON/education.json",
            method: "GET"
        })
        .then((res) => {
            this.setState({

                education: res.data

            });
        });
    }

    render(){

        const { education } =  this.state;

        // const {school} = education[0].school;


        return(

            <section id="education">
    
                <h2 className="sectionHeading">
                    
                    My Education
                
                    <span className="fa-solid fa-graduation-cap headingIcon"></span>
    
                </h2>
    
                <ul id="educationList">
            
                    
                    {education.map(e => (

                        <li className="educationItem" key={e.id}>

                            <h3 className="degree">{e.degree} for {e.program}</h3>
    
                            <p className="schoolName">{e.school}</p>

                            <p className="timeFrame">{e.year_started} - {e.year_finished}</p>

                        </li>

                    ))}
    
                </ul>
                        
            </section>
    
        );

    }

}

export default Education;