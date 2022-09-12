import React from 'react'
import ProductItem from '../../pattern/ProductItem'
import img_sale from '../../image/img_sale.webp'
import TittleComponent from '../../pattern/TitleComponent'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { backToTopChangePage } from '../../function/backToTopChangePage'

const AweSection6 = () => {

     const navigate = useNavigate();
     const storeProduct = useSelector(state => state.storeProduct);
     const listProduct = storeProduct.filter(item => item.type_watch.toLowerCase() === 'đồng hồ nữ');
     const listRender = listProduct.filter((item, index) => index < 6);

     return (
          <div className='awe-section-6 flex justify-center py-10'>
               <div className='global-width'>
                    <TittleComponent title="ĐỒNG HỒ NỮ" />
                    <div className='grid gap-5 grid-cols-4'>
                         <div 
                              className='img-sale'
                              onClick={() => {
                                   backToTopChangePage();
                                   navigate('/konghiuwatch/product')
                              }}
                         >
                              <img src={img_sale} alt='' />
                         </div>
                         {
                              listRender.length !== 0
                              &&
                              listRender.map(product => (
                                   <div key={product._id} className='relative'>
                                        <ProductItem product={product} />
                                   </div>
                              ))
                         }
                    </div>
               </div>
          </div>
     )
}

export default AweSection6