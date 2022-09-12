import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Homepage from './page/homepage/Homepage'
import Payment from './page/payment/Payment'
import './font-awesome/css/all.css'
import './font-awesome/css/all.min.css'
import ButtonBackToTop from './page/otherspage/ButtonBackToTop'
import { windowScrollFunc } from './function/windowScrollFunc'
import Introduce from './page/introduce/Introduce'
import Newspage from './page/newspage/Newspage'
import Contactpage from './page/contactpage/Contactpage'
import Productpage from './page/productpage/Productpage'
import Accountpage from './page/accountpage/Accountpage'
import SignInpage from './page/accountpage/sign/SignInpage'
import Signpage from './page/accountpage/sign/Signpage'
import SignUppage from './page/accountpage/sign/SignUppage'
import ContentAccount from './page/accountpage/content-accountpage/ContentAccount'
import Cartpage from './page/cartpage/Cartpage'
import ContentProductpage from './page/productpage/ContentProductpage'
import ProductInfomation from './page/productpage/ProductInfomation'
import Infoaccount from './page/accountpage/content-accountpage/Infoaccount'
import Yourcart from './page/accountpage/content-accountpage/Yourcart'
import ChangePassword from './page/accountpage/content-accountpage/ChangePassword'
import SignOutpage from './page/accountpage/sign/SignOutpage'
import Youraddress from './page/accountpage/content-accountpage/Youraddress'
import { GET_PRODUCT, SIGN_IN } from './redux/actions'
import { useDispatch } from 'react-redux'

const Routing = () => {

     window.onscroll = () => windowScrollFunc();
     const dispatch = useDispatch();   
     
     useEffect(() => {
          const userID_laten = localStorage.getItem('userID_laten')
          if(userID_laten) {
               fetch(`http://localhost:8081/api/user/${userID_laten}`, {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'}
               })
               .then(res => res.json())
               .then(res => {
                    dispatch(SIGN_IN(res))
               })
               .catch(err => console.log(err.message))
          }
          fetch('http://localhost:8081/api/product', {
               method: 'get'
          })
          .then(res => res.json())
          .then(res => {
               dispatch(GET_PRODUCT(res))
          })
          .catch(err => console.log(err.message))

     }, [dispatch])
     
     return (
          <div>
               <Routes>
                    <Route path='/konghiuwatch' element={<App />}>
                         <Route path='/konghiuwatch' element={<Homepage />} />
                         <Route path='/konghiuwatch/homepage' element={<Homepage />} />
                         <Route path='/konghiuwatch/introduce' element={<Introduce />} />
                         <Route path='/konghiuwatch/product' element={<Productpage />} >
                              <Route path='' element={<ContentProductpage />} />                              
                              <Route path=':product' element={<ProductInfomation />} />
                         </Route>
                         <Route path='/konghiuwatch/news' element={<Newspage />} />
                         <Route path='/konghiuwatch/contact' element={<Contactpage />} />
                         <Route path='/konghiuwatch/account' element={<Accountpage />}>
                              <Route path='sign' element={<Signpage />}>
                                   <Route path='sign-in' element={<SignInpage />}/>
                                   <Route path='sign-up' element={<SignUppage />}/>
                                   <Route path='sign-out' element={<SignOutpage />}/>
                              </Route>
                              <Route path='' element={<ContentAccount />}>
                                   <Route path='' element={<Infoaccount />} />
                                   <Route path='info-account' element={<Infoaccount />} />
                                   <Route path='your-cart' element={<Yourcart />} />
                                   <Route path='change-password' element={<ChangePassword />} />
                                   <Route path='address' element={<Youraddress />} />
                              </Route>
                         </Route>
                         <Route path='/konghiuwatch/cart' element={<Cartpage />} />
                    </Route>
                    <Route path='/konghiuwatch/payment' element={<Payment />} />
               </Routes>
               <ButtonBackToTop />
          </div>
     )
}

export default Routing