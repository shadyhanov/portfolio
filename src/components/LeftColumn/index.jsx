import React from "react";
import MyPicture from '../../img/IMG_2403.JPG';
import './leftColumn.css';
import '../../styles/adaptive.css'

export const LeftColumn = () => {
    return <div className="leftColumn">
        <div className= "avatar_container">
            <img className="avatar" src={MyPicture} alt="avatar" />
            <div>
                <h2>Toktosunov Bozulan</h2>
            </div>
        </div>
        <div className="left_container" style={{marginLeft: "15px"}}>
            <p className="w3-text-grey"><i className="fa fa-briefcase w3-margin-right w3-large w3-text-teal"></i>JavaScript Developer</p>
            <p className="w3-text-grey"><i className="fa fa-home w3-margin-right w3-large w3-text-teal"></i>Bishkek, Kyrgyzstan</p>
            <p className="w3-text-grey"><i className="fa fa-envelope w3-margin-right w3-large w3-text-teal"></i>bozulan.2003@gmail.com</p>
            <p className="w3-text-grey"><i className="fa fa-phone w3-margin-right w3-large w3-text-teal"></i>+996 (507) 077 517 </p>
            <hr />
            <p className="w3-text-grey">
                <b style={{fontSize: "25px"}}><i className="fa fa-asterisk w3-margin-right w3-large w3-text-teal"></i>Technical Skills</b>
            </p>
            <p className="w3-text-grey">HTML5 / CSS3</p>
            <div className="w3-light-grey">
                <div className="w3-teal w3-center" style={{width: "50%"}}>50%</div>
            </div>
            <p className="w3-text-grey">JavaScript</p>
            <div className="w3-light-grey">
                <div className="w3-teal w3-center" style={{width: "30%"}}>30%</div>
            </div>
            <p className="w3-text-grey">React</p>
            <div className="w3-light-grey">
                <div className="w3-teal w3-center" style={{width: "20%"}}>20%</div>
            </div>
            <br />
            <p className="w3-text-grey">
                <b style={{fontSize: "20px"}}><i className="fa fa-language w3-margin-right w3-large w3-text-teal"></i>Languages</b>
            </p>
            <p className="w3-text-grey">Kyrgyz</p>
            <div className="w3-light-grey">
                <div className="w3-teal w3-center" style={{width: "100%"}}>100%</div>
            </div>
            <p className="w3-text-grey">Russian</p>
            <div className="w3-light-grey">
                <div className="w3-teal w3-center" style={{width: "70%"}}>70%</div>
            </div>
            <p className="w3-text-grey">English</p>
            <div className="w3-light-grey">
                <div className="w3-teal w3-center" style={{width: "40%"}}>40%</div>
            </div>
            <br />
        </div>
    </div>
}