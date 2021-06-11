import React from 'react'
import Typed from 'react-typed'
import Images from '../Images/header.jpg'
export default function Header() {
    return (
        <>
            <section id="header-section">
            <div  className="header-wraper" style={{backgroundImage:`url(${Images})`}}>
                <div className="dark-overlay">
                <div className="main-info">
                    <h1>Front End Developer</h1>
                    <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Wordpress Theme Customize"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                     <button className="btn-main">Contact Me</button>
                </div>
                
            </div>
            </div>
            </section>
            </>
 
    )
}
