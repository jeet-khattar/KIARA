import React from 'react'
import '../Main.css'

const Header = () => {
  return (
    <div className='bg-light'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid p-0">
    <a class="navbar-brand" href="#">KIARA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
         <li class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">HOME LAYOUT 1</a></li>
            <li><a class="dropdown-item" href="#">HOME LAYOUT 2</a></li>
            <li><a class="dropdown-item" href="#">HOME LAYOUT 3</a></li>
          </ul>
        </li>
         <li class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">SHOP SIDEBAR</a></li>
            <li><a class="dropdown-item" href="#">SHOP THREE COLUMN</a></li>
            <li><a class="dropdown-item" href="#">SHOP THREE COLUMN WIDE</a></li>
            <li><a class="dropdown-item" href="#">SHOP THREE COLUMN</a></li>
            <li><a class="dropdown-item" href="#">SHOP THREE COLUMN WIDE</a></li>
            <li><a class="dropdown-item" href="#">SHOP SIX COLUMN</a></li>
            <li><a class="dropdown-item" href="#">SHOP SIX COLUMN WIDE</a></li>
            <li><a class="dropdown-item" href="#">SINGLE PRODUCT</a></li>
            <li><a class="dropdown-item" href="#">SINGLE PRODUCT V2</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">BLOG CLASSIC</a></li>
            <li><a class="dropdown-item" href="#">BLOG GRID WITH SIDEBAR</a></li>
            <li><a class="dropdown-item" href="#">BLOG GRID FOUR COLUMN</a></li>
            <li><a class="dropdown-item" href="#">BLOG NO SIDEBAR</a></li>
            <li><a class="dropdown-item" href="#">BLOG RIGHT SIDEBAR</a></li>
            <li><a class="dropdown-item" href="#">SINGLE POST</a></li>
            <li><a class="dropdown-item" href="#">SINGLE POST FOUR COLUMN</a></li>
          </ul>
        </li>
         <li class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">ABOUT</a></li>
            <li><a class="dropdown-item" href="#">CART</a></li>
            <li><a class="dropdown-item" href="#">CHECKOUT</a></li>
            <li><a class="dropdown-item" href="#">COMING SOON</a></li>
            <li><a class="dropdown-item" href="#">CONTACT</a></li>
            <li><a class="dropdown-item" href="#">ERROR PAGE</a></li>
            <li><a class="dropdown-item" href="#">FAQS</a></li>
            <li><a class="dropdown-item" href="#">MY ACCOUNT</a></li>
            <li><a class="dropdown-item" href="#">ORDER TRACKING</a></li>
            <li><a class="dropdown-item" href="#">WISHLIST</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-4" aria-disabled="true">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-4" aria-disabled="true">Contact</a>
        </li>
      </ul>
      <form class="d-flex " role="search">
         <li class="nav-item">
          <a class="nav-link list-unstyled mx-3" aria-disabled="true">WishList</a>
        </li>

         <li class="nav-item">
          <a class="nav-link list-unstyled mx-3" aria-disabled="true">cart</a>
        </li>

        <i class="fa-solid fa-magnifying-glass mx-3"></i>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header