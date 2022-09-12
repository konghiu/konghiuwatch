import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import OptionAllProduct from './OptionAllProduct'
import ProductItem from '../../pattern/ProductItem'
import TitleComponent from '../../pattern/TitleComponent'
import Addproduct from '../../admin/Addproduct'
import Pagination from '../../pattern/Pagination'

const AllOfProduct = () => {

     const userAccount = useSelector(state => state.storeAccount);
     const storeProduct = useSelector(state => state.storeProduct);
     
     const [ seemoreproduct, setSeemoreproduct ] = useState(1);
     const [ listProductCurrent, setListProductCurrent ] = useState([]);
     const [ openAddAdminProduct, setOpenAddAdminProduct ] = useState(false);

     useEffect(() => {
          const stt = seemoreproduct * 8;
          setListProductCurrent(storeProduct.slice(stt - 8, stt));
     }, [seemoreproduct, storeProduct])

     return (
          <div className='global-width my-10'>
               {
                    openAddAdminProduct && <Addproduct closeAddAdminProduct={() => setOpenAddAdminProduct(false)} />
               }
               <TitleComponent title='TẤT CẢ SẢN PHẨM' />
               {
                    userAccount.admin &&
                    <div className='flex justify-end mb-5'>
                         <button
                              className='bg-black text-white px-5 py-1 rounded-sm hover__bg-main'
                              onClick={() => setOpenAddAdminProduct(true)}
                         >thêm sản phẩm</button>
                    </div>
               }
               <div>
                    <OptionAllProduct 
                         handleSetListProduct={(list) => {
                              setListProductCurrent(list)
                              setSeemoreproduct(1);
                         }} 
                         listProduct={storeProduct} 
                    />
               </div>
               {
                    Array.isArray(listProductCurrent)
                    ?
                    <div className='grid grid-cols-4 gap-10 mt-10'>
                         {
                              listProductCurrent.map((product) => (
                                   <ProductItem product={product} key={product._id} />
                              ))
                         }
                    </div>
                    : 
                    <div className='flex justify-between items-center bg-green-200 p-5 mt-10'>
                         <p>{listProductCurrent}</p>
                         <i className='fa-solid fa-x text-sm mr-10 cursor-pointer'></i>
                    </div>
               }
               {
                    listProductCurrent.length > 1 &&
                    <Pagination quantitypage={listProductCurrent.length / 8} handleSeeMoreProduct={number => setSeemoreproduct(number)}/>
               }
          </div>
     )
}

export default AllOfProduct