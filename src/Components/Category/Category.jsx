import React from "react";
import "../Main.css"

const Category = () => {
  return (
    <>
      <div className="container category">
        <div className="row">

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img src={require("../Img/menshop.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Shop For MEN</p>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img src={require("../Img/womenshop.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Shop For WOMEN</p>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img src={require("../Img/accessories.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">ACCESSORIES</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Category;
