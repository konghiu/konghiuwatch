import React from 'react'
import ProductItem from '../../pattern/ProductItem'
import TittleComponent from '../../pattern/TitleComponent'
import cate2 from "../../image/cate_2.webp";

const AweSection7 = () => {
     return (
<div className='awe-section-5 flex justify-center py-10'>
               <div className='global-width'>
                    <TittleComponent title="PHỤ KIỆN" />
                    <div className='flex'>
                         <div className='flex-1 grid grid-cols-2 gap-5'>
                              {/* <ProductItem />
                              <ProductItem />
                              <ProductItem />
                              <ProductItem /> */}
                         </div>
                         <div className='flex-1'>
                              <div className='h-full overflow-hidden img-sale'>
                                   <img src={cate2} alt='' className='w-full h-full' />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AweSection7