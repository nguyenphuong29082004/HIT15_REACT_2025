import React from 'react'
import "./Feature.scss"
import imgFeature1 from "../../assets/image1.png"
import imgFeature2 from "../../assets/image2.png"
import imgFeature3 from "../../assets/image3.png"
import imgFeature4 from "../../assets/image4.png"
import Rectangle3 from "../../assets/Rectangle3.png"
import Rectangle1 from "../../assets/Rectangle1.png"
import Rectangle2 from "../../assets/Rectangle2.png"
import Rectangle4 from "../../assets/Rectangle4.png"
function Feature() {
  return (
    <div className='feature'>
        <div className="feature__above">
            <h1 className='feature__above__heading'>Features</h1>
            <p className='feature__above__paragraph'>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
        </div>
        <div className='grid'>
            <div className="feature__main">
                <img src={Rectangle1} alt="" className='feature__main__imgBg' />
                <div className="feauture__main__content">
                    <img className="feature__main__img" src={imgFeature1} alt="" />
                    <div className="feature__main__left">
                        <p className='feature__main__title'>Search Data</p>
                        <p className='feature__main__paragraph'>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                        <p className='feature__main__more'>Learn More</p>
                    </div>
                </div>
            </div>
            <div className="feature__main">
                <img src={Rectangle2} alt="" className='feature__main__imgBg'/>
                <div className="feauture__main__content">
                    <img className="feature__main__img" src={imgFeature2} alt="" />
                    <div className="feature__main__left">
                        <p className='feature__main__title'>Search Data</p>
                        <p className='feature__main__paragraph'>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                        <p className='feature__main__more'>Learn More</p>
                    </div>
                </div>
            </div>
            <div className="feature__main">
                <img src={Rectangle3} alt="" className='feature__main__imgBg'/>
                <div className="feauture__main__content">
                    <img className="feature__main__img" src={imgFeature3} alt="" />
                    <div className="feature__main__left">
                        <p className='feature__main__title'>Search Data</p>
                        <p className='feature__main__paragraph'>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                        <p className='feature__main__more'>Learn More</p>
                    </div>
                </div>
            </div>
            <div className="feature__main">
                <img src={Rectangle4} alt="" className='feature__main__imgBg'/>
                <div className="feauture__main__content">
                    <img className="feature__main__img" src={imgFeature4} alt="" />
                    <div className="feature__main__left">
                        <p className='feature__main__title'>Search Data</p>
                        <p className='feature__main__paragraph'>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                        <p className='feature__main__more'>Learn More</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Feature