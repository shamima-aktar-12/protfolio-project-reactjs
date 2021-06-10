import React, { Component } from 'react'

export default class Contact extends Component {
   


    render() {
        return (
            <>
            <section id="contact-section" className=" contact">
                <div className="dark-contact-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                         <h1 className="contact-header">CONTACT ME</h1>
                        <p className="text-light text-center">Please fil out the form and describe you project needs and i will contact you as soon as possible.</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                   
                        <div className="col-md-10">
                         
                           <form>
                                <div className="form-group">
                                <input  className="form-control form-control-lg" type="text" name="fullname"  placeholder="Enter The Full Name" required></input>
                                </div>
                                <div className="form-group mt-3">
                                <input  className="form-control form-control-lg" type="text" name="email"  placeholder="Enter The Email" required></input>
                                </div>
                                <div className="form-group mt-3">
                                <input  className="form-control form-control-lg" type="text" name="phone" required placeholder="Enter The Phone Number"></input>
                                </div>
                                <div className="form-group mt-3">
                                <textarea className="form-control form-control-lg" cols="100" rows="5" placeholder="Enter Shortly Describtion....."></textarea><br></br>
                                </div>
                               <button type="submit" className="btn-color form-control form-control-lg" >SUBMIT</button>

                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

         
    }

