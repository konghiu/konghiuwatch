import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { UPDATE_USER_CART } from '../../redux/actions';
import Loading from '../../pattern/Loading'

import './cartpage.css'

const Cartpage = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     
     const userAccount = useSelector(state => state.storeAccount);
     const [ loading, setLoading ] = useState(false);


     const handleRemoveCart = async (productID) => {
          setLoading(true);
          await fetch('http://localhost:8081/api/user/user-cart/remove/' + userAccount._id, {
               method: 'delete',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                    productID: productID
               })
          })
          .then(res => res.json())
          .then(res => dispatch(UPDATE_USER_CART(JSON.parse(res).usercart)))
          .catch(err => console.log(err.message))
          setLoading(false);
     }


     const handleUpdateProductUserCart = (productID, productquantity) => {
          console.log(productquantity)
          if(productquantity !== 0) {
               fetch('http://localhost:8081/api/user/user-cart/update/' + userAccount._id, {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                         productID: productID,
                         productquantity: productquantity
                    })
               })
               .then(res => res.json())
               .then(res => dispatch(UPDATE_USER_CART(JSON.parse(res).usercart)))
               // .then(res => console.log(JSON.parse(res).usercart))
               .catch(err => console.error(err.message))
          }
     }

     const totalPrice = (userAccount.usercart || []).reduce((total, item) => {
          return total + (item.productquantity * item.productprice)
     }, 0)


     return (
          <div className='cart-page'>
               {
                    loading && <Loading />
               }
               <div className='global-width py-10'>
                    <div className='flex justify-center'>
                         <p>Trang chủ / </p>
                         <p className='color-main ml-1'>giỏi hàng</p>
                    </div>
                    {/* content */}
                    {
                         Array.isArray(userAccount.usercart) && userAccount.usercart.length !== 0 ?
                         <div className='content mt-20'>
                              <div className='divide-table header-table font-normal'>
                                   <div>Hình sản phẩm</div>
                                   <div>Tên sản phâm</div>
                                   <div>Đơn giá</div>
                                   <div>Số lượng</div>
                                   <div>Thành giá</div>
                                   <div>Xóa</div>
                              </div>
                              <div>
                                   {
                                        userAccount.usercart.map(product => (
                                             <div className='divide-table item-table-product h-56' key={product.productID}>
                                                  <div className=''>
                                                       <img src={product.productimage} alt='' className='w-5/6 h-5/6' />     
                                                  </div>
                                                  <div>
                                                       <p>{product.productname}</p>
                                                  </div>
                                                  <div className='color-main font-semibold text-xl'>
                                                       {/* <p>{product.productprice.toLocaleString()}</p> */}
                                                  </div>
                                                  <div className=''>
                                                       <button 
                                                            className='w-7 h-7 flex items-center justify-center border-1'
                                                            onClick={() => handleUpdateProductUserCart(product.productID, product.productquantity - 1)}     
                                                       >-</button>
                                                       <p className='px-3'>{product.productquantity}</p>
                                                       <button 
                                                            className='w-7 h-7 flex items-center justify-center border-1'
                                                            onClick={() => handleUpdateProductUserCart(product.productID, product.productquantity + 1)}
                                                       >+</button>
                                                  </div>
                                                  <div className='color-main font-semibold text-xl'>
                                                       <p>{(product.productprice * product.productquantity).toLocaleString()}</p>
                                                  </div>
                                                  <div>
                                                       <i 
                                                            className='fa-solid fa-trash-can cursor-pointer'
                                                            onClick={() => handleRemoveCart(product.productID)}
                                                       ></i>
                                                  </div>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                         : 
                         <div className='my-10 flex flex-col items-center'>
                              <p>Chưa có đơn hàng nào</p>
                              <button 
                                   className='hover__color-main hover:underline'
                                   onClick={() => navigate('/konghiuwatch/product')}
                              >Quay lại trang bán hàng</button>
                         </div>
                    }
                    {/* thành tiền */}
                    <div className='flex mt-5'>
                         <div className='flex-1'>
                              <button 
                                   className='text-xl py-2 px-10 rounded-sm bg-black bg-opacity-5'
                                   onClick={() => navigate('/konghiuwatch/product')}
                              >Tiếp tục mua hàng</button>
                         </div>
                         <div className='flex-1 flex flex-col items-end text-xl '>
                              <p className='w-fit'>Tổng tiền thanh toán: <span className='font-semibold text-2xl ml-2 color-main'>{totalPrice.toLocaleString()}</span></p>
                              <button className='w-fit font-normal  px-20 py-2 rounded-sm mt-5 text-white bg-main hover:bg-black'>Tiến hành thanh toán</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Cartpage