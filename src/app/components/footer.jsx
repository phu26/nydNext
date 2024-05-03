"use client"

import Image from 'next/image'
import { FaFacebookF,FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
const FooterPage = () =>{
 
    return (
        <div class="footer-area">
        <div class="footer-copyright">
          <div class="container wide">
            <div class="row">
              <div class="col-lg-12">
                <div class="footer-copyright-wrapper footer-copyright-wrapper--default-footer">
                  <div class="container">
                    <div class="row align-items-center no-gutters">
                      <div class="col-lg-2 col-md-2">
                        <div class="footer-logo">
                          <a href="#">
                            <Image width="93" height="25" src="" class="img-fluid" alt=""/>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-7 col-md-5">
                        <div class="copyright-text"> Copyright © 2024 <a href="#">FuDev</a>. All Rights Reserved. </div>
                      </div>
                      <div class="col-lg-3 col-md-5">
                        <div class="copyright-social-wrapper">
                          <ul class="copyright-social">
                            <li>
                              <a href="#">
                             
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                           <FaTiktok/>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                              
                                <SiShopee/>
                              </a>
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
      </div>
    )
}

export default FooterPage