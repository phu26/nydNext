"use client"

import Image from 'next/image'
import { FaFacebookF,FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import logo from "../../assets/images/logoneee.png"
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
                          <a className="footerlogoa" href="#">
                            <Image width="186"  src={logo} class="img-fluid" alt=""/>
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
                              <a href="https://www.facebook.com/nhuydecorofficial">
                             
                                <FaFacebookF />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.tiktok.com/@nhu.y.decor">
                           <FaTiktok/>
                              </a>
                            </li>
                            <li>
                              <a href="https://shope.ee/8UmhjqcgPb">
                              
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