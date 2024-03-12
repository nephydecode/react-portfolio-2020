import React from "react";
import './Header.css';
import arrowDown from "../Images/arrow-down.svg"
import Banner from "../Images/webportfolio-banner.png"

export default function Header() {
    return (
        <div >
            <div className="background" >
                {/*<div className="section-content">*/}
                <div className="message-box message-old">
                    <p className="message">
                        <p className="message-half-space"> Hey there, I’m</p>
                        <p className="message-half-space" style={{fontSize : 50}}>KOH LUNG KUANG</p>
                        <p className="message-half-space" style={{display: "inline"}}>I am specialised in</p>
                        <p className="message-half-space" style={{color: "#44D7B6"}}>Front End Designs</p>
                        <p className="message-half-space" style={{color: "#32C5FF"}}>ARVR Development</p>

                    </p>
                </div>
                <img className="arrow-down" src={arrowDown}/>
                {/*<img style={{ marginTop: -90, maxHeight: "100%", maxWidth: "100%"}} src="../webportfolio-banner.png"></img>*/}

            </div>
        </div>
    );
}
