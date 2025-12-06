import React from 'react'
import "../Main.css"

const Provides = () => {
  return (
    <>
    <div className="container provides">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
                <i class="fa-regular fa-calendar"></i>
                <h1>Book An Appointment</h1>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <i class="fa-solid fa-bag-shopping"></i>
                <h1>Pick Up in Store</h1>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <i class="fa-solid fa-gift"></i>
                <h1>Special Packaging</h1>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <i class="fa-solid fa-arrows-rotate"></i>
                <h1>Free Global Returns</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Provides