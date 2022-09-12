import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_USER_CART } from '../redux/actions';
import Loading from './Loading';

const QuickViewProduct = (props) => {

     const dispatch = useDispatch();
     const userAccount = useSelector(state => state.storeAccount);
     const info_product = useSelector(state => state.showInfoProduct);
    
     const [ loading, setLoading ] = useState(false);
     const [ quantity, setQuantity ] = useState(1);
    
     const handleAddUserCart = async () => {
          setLoading(true);
          await fetch(`http://localhost:8081/api/user/user-cart/add/${userAccount._id}`, {
               method: 'put',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                    data: {
                         productID: info_product._id,
                         productname: info_product.productname,
                         productimage: info_product.productimage[0].src,
                         productprice: info_product.productprice,
                         productquantity: quantity
                    }
               })
          })
          .then(res => res.json())
          .then(res => dispatch(UPDATE_USER_CART(JSON.parse(res).usercart)))
          .catch(err => console.log(err.message))
          setTimeout(() => {
               setLoading(false);
               if(props.handleCloseQuickViewProduct) {
                    props.handleCloseQuickViewProduct();
               }
          }, 1000)
     }

     const newPrice = useMemo(() => {
          const price = info_product.productprice;
          const sale = info_product.productsale
          const unit = 100000;
          const newPrice = (((price / unit) * (1 - (sale / 100))).toFixed(2) * unit) 
          return newPrice
     }, [])

     return (
          <div className='content flex'>
               {
                    loading && <Loading />
               }
               <div className='w-2/5 border-2'>
                    <div>
                         <img src={info_product.productimage[0].src} alt='' className='w-full h-full'/>
                    </div>
               </div>
               <div className='flex-1 pl-10'>
                    <p className='font-normal text-xl'>{info_product.productname}</p>
                    <p className='font-normal color-main'>{newPrice.toLocaleString()}đ <span className='ml-5 line-through text-base text-black font-light'>{info_product.productsale && info_product.productprice.toLocaleString()}đ</span></p>
                    <div className='grid grid-cols-2 border-t-1 pt-5 mt-5'>
                         <p>loại máy: <span className='font-semibold'>Đang cập nhật</span></p>
                         <p>Xuất xứ thương hiệu: <span className='font-semibold'>Đang cập nhật</span></p>
                         <p>Thương hiệu: <span className='font-semibold'>Đang cập nhật</span></p>
                    </div>
                    <div className='grid grid-cols-2 border-t-1 pt-5 mt-5'>
                         <p><i className="fa-solid fa-people-carry-box w-7"></i> <span className='font-normal'>Giao hàng toàn quốc</span></p>
                         <p><i className="fa-solid fa-coins w-7"></i> <span className='font-normal'>Thanh toán khi nhận hàng</span></p>
                         <p><i className="fa-solid fa-rotate w-7"></i> <span className='font-normal'>Cam kết đổi/trả hàng miễn phí</span></p>
                         <p><i className="fa-solid fa-shield w-7"></i> <span className='font-normal'>Hàng chính hãng/Bảo hành 10 năm</span></p>
                    </div>
                    <div className=' pt-5 mt-5 border-t-1 flex text-yellow-400'>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                    </div>
                    <div className='pt-5 mt-5 border-t-1 flex items-center'>
                         <div className='flex items-center border-1 text-xl font-semibold'>
                              <button 
                                   className='w-8 h-8 flex items-center justify-center'
                                   onClick={() => setQuantity(prev => prev - 1)}
                              >-</button>
                              <p className='mx-3 font-normal'>{quantity}</p>
                              <button 
                                   className='w-8 h-8 flex items-center justify-center'
                                   onClick={() => setQuantity(prev => prev + 1)}
                              >+</button>
                         </div>
                         <p className='text-base ml-5 font-normal opacity-70'>{info_product.productquantity !== 0 ? `Còn lại ${info_product.productquantity} đơn hàng trong kho` : 'Hết hàng'} </p>
                    </div>
                    <div className='mt-5 flex font-semibold'>
                         <button 
                              className='border-1 px-5 py-2 border-black hover:text-white hover__bg-main hover:border-transparent'
                              onClick={() => handleAddUserCart()}
                         >Thêm vào giỏ hàng</button>
                         <button 
                              className='border-1 px-16 py-2 border-c bg-main text-white ml-2 hover__color-main hover:bg-white'
                         >Mua ngay</button>
                    </div>
               </div>
          </div>
     )
}

export default QuickViewProduct