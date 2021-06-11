import React from 'react'
import Images from '../Images/myimage.jpg'
export default function About() {
    return (
        <>
          <section id="about">
                <div className="container">
                    <div className="row mt-5">
                    <div className="col-md-6">
                       <img src={Images} className="image img-fluid" alt="img-1"></img>
                    </div>
                    <div className="col-md-6">
                        <h2 className="about-header">ABOUT ME</h2>
                        <p>Hello! I am shamima aktar.I have been developing for website. I am front end developer.Technology i use is(html5,css3,sass,bootstrap 4/5,React js, javascrip,jquery, git, node js).

                            I create responsive website that are displayed on all devices desktops and smartphone.  I expert of web design and development and wordpress theme customization, basic knowledge of adobe photoshop and illustrator,programing of C and C++.

                           To be an expert in the field of engineering intent to work in a challenging and competitive environment in the organizational position entrusted with higher responsibility and strategic decision making authority. To work in such environment where the role profiles are challenging, dynamic, disciplined and welcomes decision making as opportunity for self-development.</p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
