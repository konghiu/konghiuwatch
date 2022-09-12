import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import slugify from 'slugify'
import { backToTopChangePage } from '../function/backToTopChangePage'
import { SHOW_INFO_PRODUCT, UPDATE_USER_CART } from '../redux/actions'
import Loading from './Loading'
import './pattern.css'
import QuickViewProduct from './QuickViewProduct'

const ProductItem = (props) => {

     const product = props.product;

     const dispatch = useDispatch();
     const navigate = useNavigate();

     const userAccount = useSelector(state => state.storeAccount);

     const [ loading, setLoading ] = useState(false);
     const [ quickViewProduct, setQuickViewProduct ] = useState(false);

     const handleShowDetailProduct = () => {
          const url = product.productname;
          const slug = slugify(url, {
               replacement: "-",
               remove: undefined,
               lower: true,
               strict: true,
               locale: "vn",
               trim: true
          })
          dispatch(SHOW_INFO_PRODUCT(product));
          navigate('/konghiuwatch/product/' + slug);
          backToTopChangePage();
     }

     const handleQuickViewProduct = () => {
          setLoading(true);
          dispatch(SHOW_INFO_PRODUCT(product));
          setTimeout(() => {
               setQuickViewProduct(true);
               setLoading(false);
          }, 1000)
     }

     const handleAddUserCart = async () => {
          setLoading(true);
          await fetch(`http://localhost:8081/api/user/user-cart/add/${userAccount._id}`, {
               method: 'put',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                    data: {
                         productID: product._id,
                         productname: product.productname,
                         productimage: product.productimage[0].src,
                         productprice: newPrice,
                         productquantity: 1
                    }
               })
          })
          .then(res => res.json())
          .then(res => dispatch(UPDATE_USER_CART(JSON.parse(res).usercart)))
          .catch(err => console.log(err.message))
          setTimeout(() => {
               setLoading(false);
          }, 1000)
     }

     const newPrice = useMemo(() => {
          const price = product.productprice;
          const sale = product.productsale
          const unit = 100000;
          const newPrice = (((price / unit) * (1 - (sale / 100))).toFixed(2) * unit) 
          return newPrice 
     }, [])

     return (
          <React.Fragment>
               {
                    loading && <Loading />
               }
               {
                    quickViewProduct && 
                    <div className='quick-view-product'>
                         <div className='banner' onClick={() => {setQuickViewProduct(false)}}></div>
                         <QuickViewProduct handleCloseQuickViewProduct={() => setQuickViewProduct(false)} />
                    </div>
               }
               <div className='product-item-block'>
                    <div 
                         className='product-container'
                    >
                         <div className='relative flex-1'>
                              {
                                   product.productsale !== 0
                                   &&
                                   <div className='block-sale'>
                                        <div className='content'>
                                             <p>{product.productsale}%</p>
                                        </div>
                                   </div>
                              }
                              <img src={product.productimage[0].src} alt='' />
                              <div className='product-transition'>
                                   <span className='shadow-xl'
                                        onClick={() => handleShowDetailProduct()}
                                   ></span>
                                   <i 
                                        className="fa-regular fa-eye"
                                        onClick={() => handleQuickViewProduct()}
                                   ></i>
                                   <i 
                                        className="fa-solid fa-cart-arrow-down"
                                        onClick={() => handleAddUserCart()}
                                   ></i>
                                   <div className='container-star'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                   </div>
                              </div>
                         </div>
                         <div className='pt-5 flex flex-col items-center'>
                              <p 
                                   className='w-fit font-semibold text-lg hover__color-main hover:underline cursor-pointer'
                                   onClick={() => handleShowDetailProduct()}
                              >{product.productname}</p>
                              <div className='w-full flex justify-around items-center'>
                                   {
                                        product.productsale !== 0 &&
                                        <p className='text-sm opacity-60 line-through'>{Number(product.productprice).toLocaleString()}đ</p>
                                   }
                                   <p className='text-xl font-bold color-main'>{newPrice.toLocaleString()}đ</p>
                              </div>
                         </div>
                    </div>
               </div>
          </React.Fragment>
     )
}

export default ProductItem