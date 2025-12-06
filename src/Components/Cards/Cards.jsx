import React from "react";
import "../Main.css"

const Cards = () => {
  return (
    <div className="bg-light">
      <div className="container cardss">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img
                src={require("../Img/leather-jacket.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">SOFT LEATHER JACKETS</h5>
                <p class="card-text">
                  Premium soft leather jacket offering smooth touch, modern
                  style, and perfect comfort for daily use.
                </p>
                <a href="#">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img
                src={require("../Img/high-neck-sweter.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">high-neck sweater</h5>
                <p class="card-text">
                  Soft high-neck sweater with warm fabric, clean design, and
                  perfect comfort for winter daily wear.
                </p>
                <a href="#">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img
                src={require("../Img/blue-jackets.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">blue denim</h5>
                <p class="card-text">
                  Classic blue denim jeans with strong fabric, stylish fit, and
                  comfortable feel for everyday wear
                </p>
                <a href="#">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
