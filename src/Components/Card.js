import React from 'react'
import CardComponent from './CardComponent'
import supervisor from './SVG/supervisor.svg'
import karma from  '../SVG/karma.svg'
import teambuilder from  '../SVG/teambuilder.svg'
import calculator from  '../SVG/calculator.svg'

function Card(){
    return(
        <div className = "col-md-12 body">
            <div className = "heading">
                <h1>Reliable, efficient delivery</h1>
                <h1>Powered by Technology</h1> 
                <p>Our Artificial intelligence powered tools use millions of project data points to ensure that your project is successful</p>

            </div>       

            <div className = "row">
                <div className ="col aside">
                    <CardComponent 
                        name = "Supervisor"
                        text = "Monitors activity to identify project roadblocks"
                        src = {supervisor}
                    />
                </div>

                <div className ="col">
                    <CardComponent 
                        style = {{borderTop: "5px solid #FF4500"}}
                        name = "Team Builder"
                        text = "Scans our talent network to create the optimal team for your project"
                        src = {teambuilder}
                    />
                    <CardComponent 
                        style = {{borderTop: "5px solid #FF9636"}}
                        name = "Karma"
                        text = "Regularly evaluates our talent to ensure quality"
                        src = {karma}
                    />
                </div>

                <div className ="col aside">
                    <CardComponent 
                        style = {{borderTop: "5px solid #057DCD"}}
                        name = "Calculator"
                        text = "Uses data from past projects to provide better delivery estimates"
                        src = {calculator}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card