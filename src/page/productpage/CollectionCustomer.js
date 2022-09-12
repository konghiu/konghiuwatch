import React from 'react'
import Slider from 'react-slick'
import collection_customer_1 from '../../image/collection_customer_1.webp'
import TittleComponent from '../../pattern/TitleComponent'
import './productpage.css'

const CollectionCustomer = () => {

     const settings = {
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          autoplaySpeed: 5000,
          autoplay: false,
          dots: true
     }

     return (
          <div className='collection-customer'>
               <TittleComponent title="KHÁCH HÀNG CỦA CHÚNG TÔI" /> 
               <p className='text-center mb-10 -mt-5'>Ai nói bạn không thể tỏa sáng?</p>
               <div>
                    <Slider {...settings} className='slider'>
                         {
                              [1,2,3,4,5,6].map(item => (
                                   <div className='' key={item}>
                                        <img src={collection_customer_1} alt='' className='w-full h-full' />
                                   </div>
                              ))
                         }
                    </Slider>
               </div>
          </div>
     )
}

export default CollectionCustomer