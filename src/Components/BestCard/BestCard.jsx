import React from 'react'

const BestCard = () => {
  return (
    <>
    <div className="container new-arrivals">
        <div className="row">

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card">
              <img src={require("../Img/product-item-1.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h1 class="card-text">DARK FLOLISH ONEPIECE</h1>
                <div className="priceandcart">
                <p className="price">$95.00</p>
                <p className="cartbtn">Add To Cart</p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card">
              <img src={require("../Img/product-item-2.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h1 class="card-text">BAGGY TSHIRT</h1>
                <div className="priceandcart">
                <p className="price">$55.00</p>
                <p className="cartbtn">Add To Cart</p>
                </div>
              </div>
            </div>
          </div>
          

          <div className="col-lg-3 col-md-6 col-sm-12">
              <div class="card">
                <img src={require("../Img/product-item-3.jpg")} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-text">COTTON OFF-WHITE SHIRT</h1>
                  <div className="priceandcart">
                <p className="price">$65.00</p>
                <p className="cartbtn">Add To Cart</p>
                </div>
                </div>
              </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
              <div class="card">
                <img src={require("../Img/product-item-4.jpg")} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-text">CROP SWEATER</h1>
                  <div className="priceandcart">
                <p className="price">$50.00</p>
                <p className="cartbtn">Add To Cart</p>
                </div>
                </div>
              </div>
            </div>
          

        </div>
      </div>
    </>
  )
}

export default BestCard