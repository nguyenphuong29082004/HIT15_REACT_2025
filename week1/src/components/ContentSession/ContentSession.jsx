import React from "react";
import "./ContentSession.css"
import { FaCartFlatbed } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { FaTruckLoading } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


function ContentSession(){
    return(
        <>
            <div className="container-csession">
                <div className="sub-container">
                    <div className="img-container">
                            <FaCartFlatbed className="icon-csession"/>
                    </div>
                    <div className="title-container">
                        <h4 className="title-csession">Lorem Ipsum</h4>
                        <p className="description">
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                        </p>
                        <a href="#" className="link-csession">
                            <span>Learn More </span>
                            <FaArrowRightLong/>
                        </a>
                    </div>
                </div>

                 <div className="sub-container">
                    <div className="img-container">
                            <FaTruck className="icon-csession"/>
                    </div>
                    <div className="title-container">
                        <h4 className="title-csession">Dolor Ditema</h4>
                        <p className="description">
                            Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata
                        </p>
                        <a href="#" className="link-csession">
                            <span>Learn More </span>
                            <FaArrowRightLong/>
                        </a>
                    </div>
                </div>

                 <div className="sub-container">
                    <div className="img-container">
                            <FaTruckLoading className="icon-csession"/>
                    </div>
                    <div className="title-container">
                        <h4 className="title-csession">Sed ut perspiciatis</h4>
                        <p className="description">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur 
                        </p>
                        <a href="#" className="link-csession">
                            <span>Learn More </span>
                            <FaArrowRightLong/>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContentSession