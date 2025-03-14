import React from "react";
import "./AboutUs.css"
import { BsFillDiagram3Fill } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";
import AboutImg from "../../assets/about.jpg"
function AboutUs(){
    return(
        <>
        <div className="about">
            <div className="about-left">
                <h3 className="about-title">About Us</h3>
                <p>
                    Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
                </p>

                <div className="about-left-element">
                    <div className="about-icon">
                        <BsFillDiagram3Fill/>
                    </div>
                    <div className="about-left-title">
                        <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                        <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                    </div>
                </div>

                 <div className="about-left-element">
                    <div className="about-icon">
                        <BsFullscreenExit/>
                    </div>
                    <div className="about-left-title">
                        <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                        <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                    </div>
                </div>

                 <div className="about-left-element">
                    <div className="about-icon">
                        <BsBroadcast/>
                    </div>
                    <div className="about-left-title">
                        <h5>Voluptatem et qui exercitationem</h5>
                        <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                    </div>
                </div>
            </div>
            <div className="about-right">
                <div className="about-img">
                    <img src={AboutImg} alt="Video about us" />
                </div>
                <div className="main-wrp-video">
                    <div className="wrp_video">
                         <div className="circle">
                            <a href="https://youtu.be/Y7f98aduVJ8?si=iQyTapwcsmZ-CnzE" class="glightbox pulsating-play-btn">
                                 <div className="icon-triangle"></div>
                                 <div className="sub-circle-video"></div>
                                 <div className="circle-video"></div>
                            </a>
                         </div>
                         
                    </div>
                </div>
                  
            </div>
        </div>    
        </>
    )
}

export default AboutUs