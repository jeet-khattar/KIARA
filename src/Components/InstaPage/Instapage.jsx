import React from 'react'

const Instapage = () => {
  return (
    <>
    <div className="container instadetails">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
                <img src={require("../Img/insta-item1.jpg")} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                <img src={require("../Img/insta-item2.jpg")} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                <img src={require("../Img/insta-item3.jpg")} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                <img src={require("../Img/insta-item4.jpg")} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                <img src={require("../Img/insta-item5.jpg")} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                <img src={require("../Img/insta-item6.jpg")} alt="" />
            </div>
        </div>
        <button type="button" className='instafollowbtn'>Follow On Instagram</button>
    </div>
    </>
  )
}

export default Instapage