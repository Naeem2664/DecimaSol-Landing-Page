import React from 'react'
import '../styles/education.css'
import images from '../assets/images/images'
const Education = () => {
  return (
    <>
    <div className="education-container">
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1 className="text-center edu-title">
                      Education
                    </h1>
                </div>
            </div>
            <div className="row edu-details">
                <div className="col-md-5 order-1 order-md-1 img">
                    <img src={images.Education} alt="" />
                </div>
                <div className="col-md-7 order-2 order-md-2 edu-detail">
                    <h1 className="field">Bachelors in Software Engineering</h1>
                    <p className="uni">
                        <strong>Khawaja Fareed UEIT, Rahim Yar Khan</strong>
                        <strong className="year">2020-2024</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Education
