import React from 'react'
import Images from '../Images/htmlpic.jpeg'
export default function Skill() {
    return (
        <div>
            <section id="skill-section">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="skill-header text-center">MY SKILL</h1>
                    </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                     <img src={Images} className="htmlpic" alt="img-2"></img>
                        </div>
                        <div className="col-md-6">
                        <p className="progress-color">HTML5</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '95%'}}  aria-valuemin="0" aria-valuemax="100">95%</div>
                           </div>
                      <p className="progress-color">CSS3</p>
                      <div class="progress">
                            <div class="progress-bar bg-dark" role="progressbar" style={{width: '90%'}}  aria-valuemin="0" aria-valuemax="100">90%</div>
                           </div>
                           <p className="progress-color">SASS</p>
                      <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '90%'}}  aria-valuemin="0" aria-valuemax="100">90%</div>
                           </div>
                      <p className="progress-color">Bootstrap 4/5</p>
                      <div class="progress">
                            <div class="progress-bar  bg-dark" role="progressbar" style={{width: '80%'}}  aria-valuemin="0" aria-valuemax="100">80%</div>
                           </div>
                      <p className="progress-color">React Js</p>
                      <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '70%'}}  aria-valuemin="0" aria-valuemax="100">70%</div>
                           </div>
                      <p className="progress-color">Jquery</p>
                      <div class="progress">
                            <div class="progress-bar  bg-dark" role="progressbar" style={{width: '60%'}}  aria-valuemin="0" aria-valuemax="100">60%</div>
                           </div>
                      <p className="progress-color">Javascript</p>
                      <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '60%'}}  aria-valuemin="0" aria-valuemax="100">60%</div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
