import React from 'react'
import ProductItem from '../../pattern/ProductItem'
import TittleComponent from '../../pattern/TitleComponent'


const Collection = () => {
     return (
          <div className='global-width my-10'>
               <TittleComponent title='BỘ SƯU TẬP' />
               <div className='grid grid-cols-3'>
                    {/* <ProductItem />
                    <ProductItem />
                    <ProductItem /> */}
               </div>
          </div>
     )
}

export default Collection