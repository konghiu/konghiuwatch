import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { clsx } from 'clsx'
import ProductItem from '../../pattern/ProductItem'
import TittleComponent from '../../pattern/TitleComponent'
import { aweSection3 } from './arrayToRender'

const AweSection3 = () => {

     const storeProduct = useSelector(state => state.storeProduct);
     const [ typeToGetProduct, setTypeToGetProduct ] = useState(aweSection3[0].title.toLowerCase());

   
     return (
          <div className='w-full py-10'>
               <TittleComponent title="TOP SẢN PHẨM BÁN CHẠY" />
               <div className='flex mb-10 justify-center'>
                    {
                         aweSection3.map(item => (
                              <button
                                   key={item.id}
                                   className={clsx('mx-1 py-2 px-12 text-xl font-normal hover:bg-black hover:text-white', {
                                        'bg-black + text-white': item.title.toLowerCase() === typeToGetProduct
                                   })}
                                   onClick={() => setTypeToGetProduct(item.title.toLowerCase())}
                              >
                                   {item.title}
                              </button>
                         ))
                    }
               </div>
               <div className='grid grid-cols-4 gap-5'>
                    {
                         storeProduct.filter(item => item.type_watch.toLowerCase() === typeToGetProduct).map(product => (
                              <ProductItem product={product} key={product._id} />
                         ))
                    }
               </div>
          </div>
     )
}

export default AweSection3