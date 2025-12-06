import React from "react";
import "../Main.css"

const Wintercollection = () => {
  return (
    <>
      <div className="container bg-light wintercollection">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="sidephoto">
              <img src={require("../Img/single-image-2.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="classic-winter">
              <h1>Classic winter collection</h1>
              <p>
                Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
                gravida orci, fringilla a. Ac sed eu fringilla odio mi.
                Consequat pharetra at magna imperdiet cursus ac faucibus sit
                libero. Ultricies quam nunc, lorem sit lorem urna, pretium
                aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo
                mollis diam sed facilisis at cursus imperdiet cursus ac faucibus
                sit faucibus sit libero.
              </p>
              <button type="button">SHOP COLLECTION</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wintercollection;
