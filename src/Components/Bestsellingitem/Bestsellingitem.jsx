import React from "react";
import "../Main.css";

const Bestsellingitem = () => {
  return (
    <>
      <div className="container Bestsellingitem">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <h1>Best Selling Items</h1>
          </div>
          <div className="col-auto">
            <a type="button">View All Products</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestsellingitem;
