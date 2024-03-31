"use client"
import { useDispatch } from 'react-redux'
import { FaBeer } from "react-icons/fa";
import { useState, useEffect,useRef } from 'react'
import imagelogo from '../assets/images/logo_3.png'
import pic1 from '../assets/images/pic1.jpg'
import pic2 from '../assets/images/pic2.jpg'
import pic3 from '../assets/images/pic3.jpg'
import pic4 from '../assets/images/pic4.jpg'
import pic5 from '../assets/images/pic5.jpg'
import pic6 from '../assets/images/pic6.jpg'
import bottomenu from '../assets/images/thumbl.jpg'
import { SlMagnifier,SlHandbag,SlArrowDown } from "react-icons/sl";
import '../assets/js/active.js'
import Image from 'next/image'
import './contact.css'
const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  const category = [
    {id:"product-series-1",title:"Decoration",tab:"product-tab-1"},
    {id:"product-series-4",title:"Lighting" ,tab:"product-tab-2"},
    {id:"product-series-3",title:"Storage",tab:"product-tab-3" },
    {id:"product-series-4",title:"Living Room",tab:"product-tab-4" },
]
const [activeTab,setActiveTab] =  useState(category[0].tab);
const activeNav = category.findIndex(e => e.tab === activeTab)
const handleScroll = (scrollAmount) => {
  // Calculate the new scroll position
  
  const newScrollPosition = scrollPosition + scrollAmount;
  console.log(newScrollPosition);
  // Update the state with the new scroll position
  setScrollPosition(newScrollPosition);

  // Access the container element and set its scrollLeft property
  containerRef.current.scrollLeft = newScrollPosition;
};
    useEffect(() => {


      showSlide();
      }, [])
window.onload=function(){

    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')
    let sli = document.querySelector('.slide')
 
   
    next.addEventListener('click', nextClick)
        
    
    
    prev.addEventListener('click',prevClick)

  
}
const  showSlide = () => {
    let items = document.querySelectorAll('.item')

 
        document.querySelector('.slide').appendChild(items[0])
   
   
   
    }
    const  click = (x) => {
     console.log(x)
     
      }
const  nextClick = () => {
   
    let items = document.querySelectorAll('.item')

    document.querySelector('.slide').appendChild(items[0])
    }

    const prevClick = () => {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
    }

  return (
    <div>
   <div class="hero-slider-area section-space">
     <div class="hero-slider-wrapper">
       <div class="ht-slick-slider slick-initialized slick-slider slick-dotted">
         <div class="slick-list draggable">
           <div>
             <div class="container2">
               <div class="slide">
                 <div class="item" style={{backgroundImage: `url(${pic1.src})`}}>
                   <div class="content">
                     <div class="name">Sofa hạt đậu</div>
                     <div class="des">Ghế sofa Nhu Y Decor được chế tác từ len lồng cừu mềm mịn, nhung, hay bọc da và khung gỗ tự nhiên cao cấp, hứa hẹn mang đến không gian ấm áp và sang trọng cho không gian của bạn.</div>
                     <button>See More</button>
                   </div>
                 </div>
                 <div class="item" style={{backgroundImage: `url(${pic2.src})`}}>
                   <div class="content">
                     <div class="name">Sofa lông cừu</div>
                     <div class="des">Ghế sofa Nhu Y Decor được chế tác từ len lồng cừu mềm mịn và khung gỗ tự nhiên cao cấp, hứa hẹn mang đến không gian ấm áp và sang trọng cho không gian của bạn.</div>
                     <button>See More</button>
                   </div>
                 </div>
                 <div class="item" style={{backgroundImage: `url(${pic3.src})`}}>
                   <div class="content">
                     <div class="name">Bàn hạt đậu</div>
                     <div class="des">Bàn trà tròn SoFa -  cafe phong cách hiện đại</div>
                     <button> See More</button>
                   </div>
                 </div>
                 <div class="item" style={{backgroundImage: `url(${pic4.src})`}}>
                   <div class="content">
                     <div class="name">Bàn tròn sofa</div>
                     <div class="des">Mặt bàn từ gỗ MDF phủ melamin cao cấp, chống xước và chống nước. Chân bàn là gỗ cao su vân gỗ đều và đẹp.</div>
                     <button>See More</button>
                   </div>
                 </div>
                 <div class="item" style={{backgroundImage: `url(${pic5.src})`}}>
                   <div class="content">
                     <div class="name">Gương tròn treo tường</div>
                     <div class="des">Không chỉ là vật dụng hữu ích trong việc trang điểm, sản phẩm còn mang tính trang trí cao, tôn thêm vẻ đẹp cho không gian của ngôi nhà.</div>
                     <button>See More</button>
                   </div>
                 </div>
                 <div class="item" style={{backgroundImage: `url(${pic6.src})`}}>
                   <div class="content">
                     <div class="name">Kệ gỗ decor</div>
                     <div class="des">Kệ gỗ trang trí phòng ngủ, phòng khách, nhà bếp</div>
                     <button>See More</button>
                   </div>
                 </div>
               </div>
               <div class="button">
                 <button class="prev">
                   <i class="fa-solid fa-arrow-left"></i>
                 </button>
                 <button class="next">
                   <i class="fa-solid fa-arrow-right"></i>
                 </button>
               </div>
             </div>
             <div class="slick-slide slick-current slick-active" data-slick-index="2" aria-hidden="false" style={{width: "1222px", position: "relative", left: "-2444px", top: "0px", zIndex: "999", opacity: "1"}} role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">
               <div>
                 <div class="single-slider-item" style={{width: "100%", display: "inline-block"}}>
                   <div class="hero-slider-item-wrapper hero-slider-item-wrapper--fullwidth hero-slider-bg-6"></div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   </div>
   <div style={{paddingTop: "50px"}}>
     <div class="category-area section-space">
       <div class="container wide">
         <div class="row">
           <div class="col-lg-12">
             <div class="category-wrapper category-wrapper--style2">
               <div class="row">
                 <div class="col-md-4">
                   <div class="single-category-item single-category-item--style2">
                     <div class="single-category-item__image">
                       <a href="shop-left-sidebar.html">
                         <Image width="600" height="350" src="" class="Image-fluid" alt="" />
                       </a>
                     </div>
                     <div class="single-category-item__content single-category-item__content--style2">
                       <h4 class="title-light">Cyber Monday</h4>
                       <h3 class="title">Big Sale 50% Off</h3>
                       <a href="shop-left-sidebar.html">View Collection <i class="ion-android-arrow-dropright-circle"></i>
                       </a>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-4">
                   <div class="single-category-item single-category-item--style2">
                     <div class="single-category-item__image">
                       <a href="shop-left-sidebar.html">
                         <Image width="600" height="350" src="" class="Image-fluid" alt="" />
                       </a>
                     </div>
                     <div class="single-category-item__content single-category-item__content--style2">
                       <h4 class="title-light">New Arrivals</h4>
                       <h3 class="title">Decor Accessories</h3>
                       <a href="shop-left-sidebar.html">View Collection <i class="ion-android-arrow-dropright-circle"></i>
                       </a>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-4">
                   <div class="single-category-item single-category-item--style2">
                     <div class="single-category-item__image">
                       <a href="shop-left-sidebar.html">
                         <Image width="600" height="350" src="" class="Image-fluid" alt="" />
                       </a>
                     </div>
                     <div class="single-category-item__content single-category-item__content--style2">
                       <h4 class="title-light">New Arrivals</h4>
                       <h3 class="title">Decor Accessories</h3>
                       <a href="shop-left-sidebar.html">View Collection <i class="ion-android-arrow-dropright-circle"></i>
                       </a>
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
              <div>
              <div class="single-row-slider-tab-area section-space">
              
              <div class="container">
              <div class="row">
              <div class="col-lg-12">
              <div class="section-title-wrapper text-center section-space--half">
                        <h2 class="section-title">Our Products</h2>
                        <p class="section-subtitle">Mirum est notare quam littera gothica, quam nunc putamus parum
                            claram anteposuerit litterarum formas.</p>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-lg-12">
             

                    <div class="tab-slider-wrapper">
                    <div class="tab-product-navigation">
                            <div class="nav nav-tabs justify-content-center" id="nav-tab2" role="tablist">
                            {
                              category.map((cate,index)=>(
                                <a key={index} className={`nav-item nav-link ${index === activeNav ? 'active' : ''} `}    onClick={() => setActiveTab(cate.tab)}    id={cate.id}     data-bs-toggle="tab"  role="tab" aria-selected="false" tabindex="-1">{cate.title}</a>
                              )

                              )
                            }
                          
                              </div>
                              </div>
                              <div class="tab-content">
                              <div class="tab-pane fade active show" id="product-series-1" role="tabpanel" aria-labelledby="product-tab-1">
                              <div class="single-row-slider-wrapper">
                              <div class="ht-slick-slider slick-initialized slick-slider" data-slick-setting="{
                                    &quot;slidesToShow&quot;: 4,
                                    &quot;slidesToScroll&quot;: 1,
                                    &quot;arrows&quot;: true,
                                    &quot;autoplay&quot;: false,
                                    &quot;autoplaySpeed&quot;: 5000,
                                    &quot;speed&quot;: 1000,
                                    &quot;infinite&quot;: false,
                                    &quot;prevArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-prev&quot;, &quot;iconClass&quot;: &quot;ion-chevron-left&quot; },
                                    &quot;nextArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-next&quot;, &quot;iconClass&quot;: &quot;ion-chevron-right&quot; }
                                }" data-slick-responsive="[
                                    {&quot;breakpoint&quot;:1501, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4} },
                                    {&quot;breakpoint&quot;:1199, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4, &quot;arrows&quot;: false} },
                                    {&quot;breakpoint&quot;:991, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;arrows&quot;: false} },
                                    {&quot;breakpoint&quot;:767, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;arrows&quot;: false} },
                                    {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;arrows&quot;: false} },
                                    {&quot;breakpoint&quot;:479, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;arrows&quot;: false} }
                                ]">
                                    <button class="slick-prev slick-arrow slick-disabled" aria-disabled="true" onClick={() => handleScroll(-200)} >
                                    <i class="ion-chevron-left"></i>
                                    </button>
                                    <div class="slick-list draggable">
                                    <div class="slick-track" ref={containerRef} style={{opacity: "1", width: "1425px", transform: "translate3d(0px, 0px, 0px)"}}>
                                    <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "255px"}}>
                                      <div>
                                      <div class="col" style={{width: "100%", display: "inline-block"}}>
                                      <div class="single-grid-product">
                                      <div class="single-grid-product__image">
                                      <a href="single-product.html" tabindex="0">
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                    </a>

                                                    <div class="hover-icons">
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-bag"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-heart"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-android-options"></i></a>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container" tabindex="0"><i class="ion-android-open"></i></a>
                                                    </div>
                                        </div>  
                                        <div class="single-grid-product__content">
                                        <div class="single-grid-product__category-rating">
                                        <span class="category"><a href="shop-left-sidebar.html" tabindex="0">Furniture</a></span>
                                        <span class="rating">
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star-outline"></i>
                                                        </span>
                                          </div>
                                          <h3 class="single-grid-product__title"> <a href="single-product.html" tabindex="0">Cillum dolore lorem ipsum
                                                            decoration item</a></h3>
                                                            <p class="single-grid-product__price"><span class="main-price">$120.00</span></p>

                                          </div>



                                        </div>

                                        </div>
                                        </div>
                                      </div>



                                      <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "255px"}}>
                                      <div>
                                      <div class="col" style={{width: "100%", display: "inline-block"}}>
                                      <div class="single-grid-product">
                                      <div class="single-grid-product__image">
                                      <a href="single-product.html" tabindex="0">
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                    </a>

                                                    <div class="hover-icons">
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-bag"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-heart"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-android-options"></i></a>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container" tabindex="0"><i class="ion-android-open"></i></a>
                                                    </div>
                                        </div>  
                                        <div class="single-grid-product__content">
                                        <div class="single-grid-product__category-rating">
                                        <span class="category"><a href="shop-left-sidebar.html" tabindex="0">Furniture</a></span>
                                        <span class="rating">
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star-outline"></i>
                                                        </span>
                                          </div>
                                          <h3 class="single-grid-product__title"> <a href="single-product.html" tabindex="0">Cillum dolore lorem ipsum
                                                            decoration item</a></h3>
                                                            <p class="single-grid-product__price"><span class="main-price">$120.00</span></p>

                                          </div>



                                        </div>
                                        
                                        </div>
                                        </div>
                                      </div>


                                      <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "255px"}}>
                                      <div>
                                      <div class="col" style={{width: "100%", display: "inline-block"}}>
                                      <div class="single-grid-product">
                                      <div class="single-grid-product__image">
                                      <a href="single-product.html" tabindex="0">
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                    </a>

                                                    <div class="hover-icons">
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-bag"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-heart"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-android-options"></i></a>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container" tabindex="0"><i class="ion-android-open"></i></a>
                                                    </div>
                                        </div>  
                                        <div class="single-grid-product__content">
                                        <div class="single-grid-product__category-rating">
                                        <span class="category"><a href="shop-left-sidebar.html" tabindex="0">Furniture</a></span>
                                        <span class="rating">
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star-outline"></i>
                                                        </span>
                                          </div>
                                          <h3 class="single-grid-product__title"> <a href="single-product.html" tabindex="0">Cillum dolore lorem ipsum
                                                            decoration item</a></h3>
                                                            <p class="single-grid-product__price"><span class="main-price">$120.00</span></p>

                                          </div>



                                        </div>
                                        
                                        </div>
                                        </div>
                                      </div>



                                      <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "255px"}}>
                                      <div>
                                      <div class="col" style={{width: "100%", display: "inline-block"}}>
                                      <div class="single-grid-product">
                                      <div class="single-grid-product__image">
                                      <a href="single-product.html" tabindex="0">
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                    </a>

                                                    <div class="hover-icons">
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-bag"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-heart"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-android-options"></i></a>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container" tabindex="0"><i class="ion-android-open"></i></a>
                                                    </div>
                                        </div>  
                                        <div class="single-grid-product__content">
                                        <div class="single-grid-product__category-rating">
                                        <span class="category"><a href="shop-left-sidebar.html" tabindex="0">Furniture</a></span>
                                        <span class="rating">
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star-outline"></i>
                                                        </span>
                                          </div>
                                          <h3 class="single-grid-product__title"> <a href="single-product.html" tabindex="0">Cillum dolore lorem ipsum
                                                            decoration item</a></h3>
                                                            <p class="single-grid-product__price"><span class="main-price">$120.00</span></p>

                                          </div>



                                        </div>
                                        
                                        </div>
                                        </div>
                                      </div>



                                      <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "255px"}}>
                                      <div>
                                      <div class="col" style={{width: "100%", display: "inline-block"}}>
                                      <div class="single-grid-product">
                                      <div class="single-grid-product__image">
                                      <a href="single-product.html" tabindex="0">
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                    </a>

                                                    <div class="hover-icons">
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-bag"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-heart"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-android-options"></i></a>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container" tabindex="0"><i class="ion-android-open"></i></a>
                                                    </div>
                                        </div>  
                                        <div class="single-grid-product__content">
                                        <div class="single-grid-product__category-rating">
                                        <span class="category"><a href="shop-left-sidebar.html" tabindex="0">Furniture</a></span>
                                        <span class="rating">
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star-outline"></i>
                                                        </span>
                                          </div>
                                          <h3 class="single-grid-product__title"> <a href="single-product.html" tabindex="0">Cillum dolore lorem ipsum
                                                            decoration item</a></h3>
                                                            <p class="single-grid-product__price"><span class="main-price">$120.00</span></p>

                                          </div>



                                        </div>
                                        
                                        </div>
                                        </div>
                                      </div>



                                      <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "255px"}}>
                                      <div>
                                      <div class="col" style={{width: "100%", display: "inline-block"}}>
                                      <div class="single-grid-product">
                                      <div class="single-grid-product__image">
                                      <a href="single-product.html" tabindex="0">
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                    </a>

                                                    <div class="hover-icons">
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-bag"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-heart"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-android-options"></i></a>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container" tabindex="0"><i class="ion-android-open"></i></a>
                                                    </div>
                                        </div>  
                                        <div class="single-grid-product__content">
                                        <div class="single-grid-product__category-rating">
                                        <span class="category"><a href="shop-left-sidebar.html" tabindex="0">Furniture</a></span>
                                        <span class="rating">
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star-outline"></i>
                                                        </span>
                                          </div>
                                          <h3 class="single-grid-product__title"> <a href="single-product.html" tabindex="0">Cillum dolore lorem ipsum
                                                            decoration item</a></h3>
                                                            <p class="single-grid-product__price"><span class="main-price">$120.00</span></p>

                                          </div>



                                        </div>
                                        
                                        </div>
                                        </div>
                                      </div>





                                      <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "255px"}}>
                                      <div>
                                      <div class="col" style={{width: "100%", display: "inline-block"}}>
                                      <div class="single-grid-product">
                                      <div class="single-grid-product__image">
                                      <a href="single-product.html" tabindex="0">
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                    </a>

                                                    <div class="hover-icons">
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-bag"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-heart"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-android-options"></i></a>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container" tabindex="0"><i class="ion-android-open"></i></a>
                                                    </div>
                                        </div>  
                                        <div class="single-grid-product__content">
                                        <div class="single-grid-product__category-rating">
                                        <span class="category"><a href="shop-left-sidebar.html" tabindex="0">Furniture</a></span>
                                        <span class="rating">
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star-outline"></i>
                                                        </span>
                                          </div>
                                          <h3 class="single-grid-product__title"> <a href="single-product.html" tabindex="0">Cillum dolore lorem ipsum
                                                            decoration item</a></h3>
                                                            <p class="single-grid-product__price"><span class="main-price">$120.00</span></p>

                                          </div>



                                        </div>
                                        
                                        </div>
                                        </div>
                                      </div>




                                      <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "255px"}}>
                                      <div>
                                      <div class="col" style={{width: "100%", display: "inline-block"}}>
                                      <div class="single-grid-product">
                                      <div class="single-grid-product__image">
                                      <a href="single-product.html" tabindex="0">
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                        <Image width="600" height="800" src="" class="img-fluid" alt=""/>
                                                    </a>

                                                    <div class="hover-icons">
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-bag"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-heart"></i></a>
                                                        <a href="javascript:void(0)" tabindex="0"><i class="ion-android-options"></i></a>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#quick-view-modal-container" tabindex="0"><i class="ion-android-open"></i></a>
                                                    </div>
                                        </div>  
                                        <div class="single-grid-product__content">
                                        <div class="single-grid-product__category-rating">
                                        <span class="category"><a href="shop-left-sidebar.html" tabindex="0">Furniture</a></span>
                                        <span class="rating">
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star active"></i>
                                                            <i class="ion-android-star-outline"></i>
                                                        </span>
                                          </div>
                                          <h3 class="single-grid-product__title"> <a href="single-product.html" tabindex="0">Cillum dolore lorem ipsum
                                                            decoration item</a></h3>
                                                            <p class="single-grid-product__price"><span class="main-price">$120.00</span></p>

                                          </div>



                                        </div>
                                        
                                        </div>
                                        </div>
                                      </div>


                                    </div>
                                    </div>
                                    <button class="slick-next slick-arrow"  aria-disabled="false" onClick={() => handleScroll(+200)}><i class="ion-chevron-right"></i></button>
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
 </div>
  )
  

  
 
};

export default Home;