"use client"; 
import { FaBeer } from "react-icons/fa";
import { useState, useEffect } from 'react'
import imagelogo from '../../assets/images/logo_3.png'
import bottomenu from '../../assets/images/thumbl.jpg'
import { SlMagnifier,SlHandbag,SlArrowDown } from "react-icons/sl";
import '../../assets/js/active.js'
import Image from 'next/image'
import NavLink from './navLink';


const NavbarPage = () =>{
    const links = [
        {url:"/",title:"HOME", sub:[
            {url:"/homesub1",title:"Homesub1"},
            {url:"/homesub1",title:"Homesub1"}
        ] },
        {url:"/about",title:"ABOUT" },
        {url:"/contact",title:"CONTACT" },
        {url:"/products",title:"PRODUCTS" },
    ]


     ;
    return (
        <div class="header-area header-area--transparent header-area--multi-row header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                   
                    <div class="header-wrapper d-none d-lg-flex">
                   
                        <div class="settings-dropdown-wrapper">
                            <ul class="settings-dropdown-list">
                              
                              
                            </ul>
                        </div>
                    
                        <div class="logo text-center">
                            <a >
                                <Image width="93" height="25" src={imagelogo}  alt=""/>
                            </a>
                        </div>
    
                      
                        <div class="header-icon-wrapper">
                            <ul class="icon-list">
                                <li>
                                    <a href="javascript:void(0)" id="search-overlay-trigger">
                                    <SlMagnifier/>
                                    </a>
                                </li>
                                <li>
                                    <div class="header-cart-icon">
                                        <a href="#" id="minicart-trigger">
                                           <SlHandbag/>
                                            <span class="counter">3</span>
                                        </a>
                                   
                                        <div class="mini-cart" id="mini-cart">
                                            <div class="cart-items-wrapper ps-scroll ps">
                                                <div class="single-cart-item">
                                                    <a href="javascript:void(0)" class="remove-icon"><i class="ion-android-close"></i></a>
                                                    <div class="image">
                                                        <a href="single-product.html">
                                                            <img width="80" height="106" src="assets/img/products/product-1-80x106.webp" class="img-fluid" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <p class="product-title"><a href="single-product.html">Cillum
                                                                dolore furniture</a></p>
                                                        <p class="count"><span>1 x </span> $402</p>
                                                    </div>
                                                </div>
                                                <div class="single-cart-item">
                                                    <a href="javascript:void(0)" class="remove-icon"><i class="ion-android-close"></i></a>
                                                    <div class="image">
                                                        <a href="single-product.html">
                                                            <img width="80" height="106" src="assets/img/products/product-2-80x106.webp" class="img-fluid" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <p class="product-title"><a href="single-product.html">Lorem
                                                                ipsum furniture</a></p>
                                                        <p class="count"><span>1 x </span> $500</p>
                                                    </div>
                                                </div>
                                                <div class="single-cart-item">
                                                    <a href="javascript:void(0)" class="remove-icon"><i class="ion-android-close"></i></a>
                                                    <div class="image">
                                                        <a href="single-product.html">
                                                            <img width="80" height="106" src="assets/img/products/product-3-80x106.webp" class="img-fluid" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <p class="product-title"><a href="single-product.html">Cillum
                                                                dolore tool</a></p>
                                                        <p class="count"><span>1 x </span> $607</p>
                                                    </div>
                                                </div>
                                            <div class="ps__rail-x" style={{left: '0px', bottom: '0px'}}><div class="ps__thumb-x" tabindex="0" style={{left: '0px', width: '0px'}}></div></div><div class="ps__rail-y" style={{top: '0px', right: '0px'}}><div class="ps__thumb-y" tabindex="0" style={{top: '0px', height: '0px'}}></div></div></div>
                                            <div class="cart-calculation">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-start">Sub-Total :</td>
                                                            <td class="text-end">$220.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-start">Eco Tax (-2.00) :</td>
                                                            <td class="text-end">$6.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-start">VAT (20%) :</td>
                                                            <td class="text-end">$44.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-start">Total :</td>
                                                            <td class="text-end">$270.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="cart-buttons">
                                                <a href="cart.html">VIEW CART</a>
                                                <a href="checkout.html">CHECKOUT</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="header-settings-icon">
                                        <a href="javascript:void(0)" class="header-settings-trigger" id="header-settings-trigger">
                                            <div class="setting-button">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </a>
    
    
                                        <div class="settings-menu-wrapper" id="settings-menu-wrapper">
                                            <div class="single-settings-block">
                                                <h4 class="title">MY ACCOUNT </h4>
                                                <ul>
                                                    <li><a href="login-register.html">Register</a></li>
                                                    <li><a href="login-register.html">Login</a></li>
                                                </ul>
                                            </div>
                                            <div class="single-settings-block">
                                                <h4 class="title">CURRENCY: USD </h4>
                                                <ul>
                                                    <li><a href="javascript:void(0)">€ Euro</a></li>
                                                    <li><a href="javascript:void(0)">$ US Dollar</a></li>
                                                </ul>
                                            </div>
                                            <div class="single-settings-block">
                                                <h4 class="title">LANGUAGE: EN-GB </h4>
                                                <ul>
                                                    <li><a href="javascript:void(0)"><img width="16" height="11" src="assets/img/icons/en-gb.webp" alt=""/> English</a>
                                                    </li>
                                                    <li><a href="javascript:void(0)"><img width="16" height="11" src="assets/img/icons/de-de.webp" alt=""/> Germany </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
    
                  
                     
                        <div class="navigation-menu-wrapper">
                            <nav>
                                <ul>
                                    {links.map((link)=>(
                                        <li class="menu-item-has-children">
                                            <NavLink link={link} key=  {link.title}>

                                            </NavLink>
                                           
                                            <ul class="sub-menu">
                                                {link.sub?.map((sub)=>(
                                                        <li><a href="index.html">{sub.title} </a></li>
                                                )

                                                )}
                                          
                                                </ul>
                                            </li>
                                         
                                    ))}
                                 
    
                                    <li class="menu-item-has-children"><a href="#">PAGES</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children"><a href="#">Page List One</a>
                                                <ul class="sub-menu">
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#">page list two</a>
                                                <ul class="sub-menu">
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="login-register.html">Login Register</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#">Page list three</a>
                                                <ul class="sub-menu">
                                                    <li><a href="compare.html">Compare</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="about.html">About Us</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
    
                                    <li class="menu-item-has-children"><a href="shop-left-sidebar.html">SHOP</a>
                                        <ul class="mega-menu four-column">
                                            <li><a href="#">Shop Grid</a>
                                                <ul>
                                                    <li><a href="shop-3-column.html">shop 3 column</a></li>
                                                    <li><a href="shop-4-column.html">shop 4 column</a></li>
                                                    <li><a href="shop-left-sidebar.html">shop left sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop-list-left-sidebar.html">Shop List</a>
                                                <ul>
                                                    <li><a href="shop-list.html">shop List</a></li>
                                                    <li><a href="shop-list-left-sidebar.html">shop List Left Sidebar</a>
                                                    </li>
                                                    <li><a href="shop-list-right-sidebar.html">shop List Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="single-product.html">Single Product</a>
                                                <ul>
                                                    <li><a href="single-product.html">Single Product</a></li>
                                                    <li><a href="single-product-variable.html">Single Product
                                                            variable</a></li>
                                                    <li><a href="single-product-affiliate.html">Single Product
                                                            affiliate</a></li>
                                                    <li><a href="single-product-group.html">Single Product group</a>
                                                    </li>
                                                    <li><a href="single-product-tabstyle-2.html">Tab Style 2</a></li>
                                                    <li><a href="single-product-tabstyle-3.html">Tab Style 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="single-product.html">Single Product</a>
                                                <ul>
                                                    <li><a href="single-product-gallery-left.html">Gallery Left</a></li>
                                                    <li><a href="single-product-gallery-right.html">Gallery Right</a>
                                                    </li>
                                                    <li><a href="single-product-sticky-left.html">Sticky Left</a></li>
                                                    <li><a href="single-product-sticky-right.html">Sticky Right</a></li>
                                                    <li><a href="single-product-slider-box.html">Slider Box</a></li>
                                                </ul>
                                            </li>
                                            <li class="megamenu-banner d-none d-lg-block mt-30 w-100">
                                                <a href="shop-left-sidebar.html" class="mb-0">
                                                    <Image width="920" height="183" src={bottomenu} class="img-fluid" alt=""/>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
    
                                    <li class="menu-item-has-children"><a href="blog-left-sidebar.html">BLOG</a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                            <li><a href="blog-post-left-sidebar.html">Blog Post Left Sidebar</a></li>
                                            <li><a href="blog-post-right-sidebar.html">Blog Post Right Sidebar</a></li>
                                            <li><a href="blog-post-image-format.html">Blog Post Image Format</a></li>
                                            <li><a href="blog-post-image-gallery.html">Blog Post Image Gallery</a></li>
                                            <li><a href="blog-post-audio-format.html">Blog Post Audio Format</a></li>
                                            <li><a href="blog-post-video-format.html">Blog Post Video Format</a></li>
                                        </ul>
                                    </li>
    
                                 
                                </ul>
                            </nav>
                        </div>
                    </div>
                  
    
                    <div class="header-mobile-navigation d-block d-lg-none">
                        <div class="row align-items-center">
                            <div class="col-6 col-md-6">
                                <div class="header-logo">
                                    <a href="index.html">
                                        <img width="93" height="25" src="assets/img/logo.webp" class="img-fluid" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 col-md-6">
                                <div class="mobile-navigation text-end">
                                    <div class="header-icon-wrapper">
                                        <ul class="icon-list justify-content-end">
                                            <li>
                                                <div class="header-cart-icon">
                                                    <a href="cart.html">
                                                        <i class="ion-bag"></i>
                                                        <span class="counter">3</span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" class="mobile-menu-icon" id="mobile-menu-trigger"><i class="fa fa-bars"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
              
    
                </div>
            </div>
        </div>
    </div>
    )
}

export default NavbarPage