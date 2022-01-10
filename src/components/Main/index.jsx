import React from "react";
import { LeftColumn } from "../LeftColumn";
import { RightColumn } from "../RightColumn";
import { Footer } from "../Footer";
import css from './Main.module.css'

export const MainPage = () => {
    return <div>
        <div className={css.mainPage}>
            <div className={css.container}>
                <LeftColumn/>
                <RightColumn/>
            </div>
        </div>
            <Footer/>
    </div>
}