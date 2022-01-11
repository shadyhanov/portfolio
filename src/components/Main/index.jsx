import React from "react";
import { LeftColumn } from "../LeftColumn";
import { RightColumn } from "../RightColumn";
import { Footer } from "../Footer";
import './Main.css'
import '../../styles/adaptive.css'

export const MainPage = () => {
    return <div className="main">
        <div className="mainPage">
            <div className="container">
                <LeftColumn/>
                <RightColumn/>
            </div>
            <Footer/>
        </div>
    </div>
}