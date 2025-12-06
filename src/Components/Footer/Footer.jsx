import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"


const Footer = () => {
  return (
    <>
      <div className="container foooter">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 justify-content-around">
        {" "}
        <div class="col mb-3">
            <h1>KIARA</h1>
          
          <p class="text-body-secondary">
            Gravida massa volutpat aenean odio. Amet, turpis erat nullam
            fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit
            ac sit suscipit hendrerit.
          </p>{" "}
          <div className="iconbox">
            <Facebook size={40} strokeWidth={0.5} className="mx-1"/>
            <Twitter size={40} strokeWidth={0.5} className="mx-1"/>
            <Youtube size={40} strokeWidth={0.5} className="mx-1"/>
            <Instagram size={40} strokeWidth={0.5} className="mx-1"/>      
            </div>
        </div>{" "}
        {/* <div class="col mb-3"></div>{" "} */}
        <div class="col mb-3">
          {" "}
          <h5>Section</h5>{" "}
          <ul class="nav flex-column">
            {" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>HOME</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>ABOUT</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>Services</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
               <span>Single item</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>Contact</span>
              </a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div class="col mb-3">
          {" "}
          <h5>Section</h5>{" "}
          <ul class="nav flex-column">
            {" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>Track Your Order</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>Returns + Exchanges</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>Shipping + Delivery</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>Contact Us</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>Find us easy</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span>Faqs</span>
              </a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div class="col mb-3">
          {" "}
          <h5>Section</h5>{" "}
          <ul class="nav flex-column">
            {" "}
            <li class="nav-item mb-2" id="first-q">
              Do you have any questions or suggestions?
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span id="email">contact@yourcompany.com</span>
              </a>
            </li>{" "}
            <li class="nav-item mb-2" id="second-q">
             Do you need support? Give us a call.
            </li>{" "}
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                <span id="number">+43 720 11 52 78</span>
              </a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </footer>
      </div>
    </>
  );
};

export default Footer;
