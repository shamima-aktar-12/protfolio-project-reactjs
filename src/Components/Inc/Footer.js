import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
export default function Footer() {
    return (
        <>
           <section id="footer-section">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 mt-4">
                            <h4 className="text-light">Address</h4>
                         <p>Dhaka Uttan,Nobinogor Housing,Mohammodpur,Dhaka-1207<br></br> Phone number: +0881905049822<br></br> Email: shamimaa812@gamil.com</p>
                        </div>
                        <div className="col-md-4 mt-4">
                            <ul className="item">
                                <li className="list"><a className="text-light" href="#">Home</a></li>
                                    <li className="list"> <a className="text-light" href="#">About me</a></li>
                                    <li className="list"> <a className="text-light" href="#">Services</a></li>
                                    <li className="list"> <a className="text-light" href="#">Protfolio</a></li>
                                    <li className="list"> <a className="text-light" href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mt-4">
                       <a href="www.fb.com"><FaFacebookF className="icon1"/></a>
                       <a href="www.twitter.com"><FaTwitter className="icon2"/></a>
                       <a href="www.linkedin.com"><FaLinkedinIn className="icon3"/></a>
                       <a href="www.github.com"> <FaGithub className="icon4"/></a>
                       <p>Copyright@2021 | Designed & Developed By <a href="www.fb.com">Shamima Aktar</a></p>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
