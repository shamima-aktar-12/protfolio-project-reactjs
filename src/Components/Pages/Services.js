import React from 'react'
import {IoMdDesktop} from 'react-icons/io'
import {MdDeveloperMode} from 'react-icons/md'
import {FaWordpress } from 'react-icons/fa'
import Images from '../Images/services.jpg'
export default function Services() {
    return (
        <>
            <section id="service-section" style={{backgroundImage:`url(${Images})`}}>
                <div className="dark-skill-overlay">
                <div className="container">
                    <div className="row mt-5 text-center">
                        <div className="col-md-12 mt-3">
                        <h1 className="services-header">MY SERVICES</h1>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="card card-border">
                               <div className="card-body">
                               <IoMdDesktop className="webdesign"/>
                                   <h3>Web Design</h3>
                                        <p className="para">I appropach each project individualy and always focus on the result.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-border">
                               <div className="card-body">
                               <MdDeveloperMode className="webdesign"/>
                                   <h3>Web Development</h3>
                                        <p className="para">Your website be bulid with an new technologys.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-border">
                               <div className="card-body">
                               <FaWordpress className="webdesign"/>
                                   <h3>Wordpress</h3>
                                        <p className="para">Any theme customize for website with necessary plugin install.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
