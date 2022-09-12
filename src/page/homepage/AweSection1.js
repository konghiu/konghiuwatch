import React from 'react'
import Slider from 'react-slick';
import { aweSection1 } from './arrayToRender';

const AweSection1 = () => {

     const settings = {
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          autoplaySpeed: 5000,
          autoplay: false,
     };

     return (
          <div className='awe-section-1'>
               <div className='global-width'>
                    <Slider {...settings}>
                         {
                              aweSection1.map(item => (
                                   <div className='slide-item' key={item.id}>
                                        <div className='flex justify-center'> 
                                             <img src={item.icon} alt='' />
                                        </div>
                                        <p className="text-center font-semibold">{item.title}</p>
                                        <p className='text-sm text-center'>{item.content}</p>
                                   </div>
                              ))
                         }
                    </Slider>
               </div>
          </div>
     )
}


export default AweSection1