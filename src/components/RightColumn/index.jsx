import React from "react";
import './RightColumn.css';
import '../../styles/adaptive.css'

export const RightColumn = () => {
    return <div className="right_column">

        <div className="w3-white" style={{paddingLeft: '15px', height: '195px'}}>
            <h2 className="w3-text-grey w3-padding-top"> <i className="fa fa-suitcase w3-margin-right w3-text-teal w3-xxLarge"></i> Work Experience</h2>
            <p>Hello, my name is Toktosunov Bozulan Nurlanovich. I'm 17 years old. I have no experience,
                I have not worked anywhere in this field. I am currently studying in college for the 3rd year.
                I want to join your teams because I wanted to develop in your teams and gain experience.</p>
                <hr/>
        </div>

        <div className="w3-white" style={{paddingLeft: '15px', height: '280px'}}>
            <h2 className="w3-text-grey w3-padding-top"><i className="fa fa-mortar-board w3-margin-right w3-text-teal w3-xxLarge"></i>Education</h2>
            <div>
                <h5 className="w3-text-grey w3-padding-left">Arabaev Kyrgyz State University</h5>
                <h6 className="w3-text-teal w3-padding-left"> <i className="fa fa-calendar w3-margin-right"></i> September 2019 - June 2022</h6>
                <p className="w3-padding-left">Special applied Computer Science</p>
                <hr />
            </div>
        </div>

        <div className="w3-white" style={{paddingLeft: '15px', height: '280px'}}>
            <h2 className="w3-text-grey w3-padding-top"> <i className="fa fa-certificate w3-text-teal w3-margin-right w3-xxLarge"></i> Achievements</h2>
            <div>
                <h5 className="w3-text-grey w3-padding-left">Certificate from school</h5>
                <h6 className="w3-text-teal w3-padding-left"> <i className="fa fa-calendar w3-text-teal w3-margin-right"></i> June 2019</h6>
                <p className="w3-padding-left">I graduated from the Gymnasium T.Shadykhanov</p>
                <hr />
            </div>
        </div>

    </div>
}