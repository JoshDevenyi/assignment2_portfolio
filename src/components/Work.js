import React from "react";
import axios from "axios";

class Work extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            work: [],
            skills: []
        };
    }

    componentDidMount() {

        axios({
            url: "JSON/projects.json",
            method: "GET"
        })
        .then((res) => {
            this.setState({

                work: res.data

            });
    
            //This was my attempt at using Skill IDs and 2 JSON files instead of directly putting the font awesome classes into the projects JSON file
            //I got stuck on an issue where the data work data would correctly replace the ids with the applicable classes
            //but when I ran it through a map function that original IDs were still the values applied to the generated i tags.
            //Do to my time limit today, I opted to go with the other JSON option which was working for me. Let me know if you see what I did incorrectly, I'd really like to update this and get it working properly.
            // axios({
            //     url: "JSON/skills.json",
            //     method: "GET"
            // })
            // .then((res) => {
                
            //     this.setState({
    
            //         skills: res.data

            //     });

            //     //Assigning the appropriate skill tags to each project
                
            //     //Looping through work data


            //     for(var i = 0; i < this.state.work.length; i++ ){

            //         var project = this.state.work[i];

            //         //Looping through work data skills used array
            //         for(let j = 0; j < project.skills_used.length; j++){

            //             //Looping through skills data
            //             for(let k = 0; k < this.state.skills.length; k++) {

            //                 //Replacing work data's skill IDs with the appropriate Font Awesome tags
            //                 if(project.skills_used[j] === this.state.skills[k].id){
                                
            //                     project.skills_used[j] = this.state.skills[k].icon;

            //                 }

            //             }

            //         }

            //     }
    
            // });

        });
    }


    render() {

        const { work } =  this.state;

        return (

            <section id="work">
    
                <h2 className="sectionHeading">
                    
                    My Work
                
                    <span className="fa-solid fa-display headingIcon"></span>
                
                </h2>
    
                <div id="workExamples" className="flexContainerCol">

                    {work.map(w => (

                        <div className="workExample" key={w.id}>
        
                            <div className="workPanelFlex flexContainer">
        
                                <div className="imageBox">
        
                                    <img className="workImage imageGrow" src={w.image} alt={w.title + "Screen Cap"}/>
        
                                </div>
        
                                <div className="workBox">
        
                                    <div className="workTextFlex flexContainerCol">
        
                                        <h3 className="workTitle">{w.title}</h3>
        
                                        <p className="workDescription">{w.description}</p>
        
                                        <div>
        
                                            <h4 className="workSkillHeading">Skills Used</h4>
                                            
                                            {w.skills_used.map(function (s, i){
                                                return <i className={s +" icon skill workIcon"} aria-label="HTML5 LOGO" key={i}></i>

                                            })}

                                        </div>
        
                                    </div>
        
                                </div>
        
                            </div>
                            
                        </div>

                    ))}
    
                </div>
                
            </section>
    
        );

    }

}

export default Work;