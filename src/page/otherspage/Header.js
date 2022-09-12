import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import headerBars from './header.json'
import { clsx } from 'clsx'
import logo from '../../image/logo.webp'
import IconSearch from './IconSearch'

const Header = () => {

     const userAccount = useSelector(state => state.storeAccount);
     const navigate = useNavigate();
     const location = useLocation();

     const handleInfoUser = () => {
          if(Object.keys(userAccount).length === 0) {
               navigate('/konghiuwatch/account/sign/sign-in')
          } else {
               navigate('/konghiuwatch/account')
          }
     }

     return (
          <div className='bg-black w-full flex justify-center'>
               <div className='global-width text-white flex justify-between py-6'>
                    <div
                         className='cursor-pointer'
                         onClick={() => navigate('/konghiuwatch/homepage')}
                    >
                         <img src={logo} alt=''  />
                    </div>
                    <div>
                         {
                              headerBars.map(item => (
                                   <Link
                                        to={'/konghiuwatch' + item.url}
                                        key={item.id}
                                        className={clsx('text-lg font-normal w-fit mr-5 hover:text-orange-500', {
                                             'color-main': location.pathname.includes(item.url) || (location.pathname.split('/').join('') === 'konghiuwatch' && item.id === '1')
                                        })}
                                   >{item.title}</Link>
                              ))
                         }
                    </div>
                    <div className='flex text-xl w-fit'>
                         <IconSearch />
                         <div>
                              <i 
                                   className="fa-solid fa-user mx-5 cursor-pointer"
                                   onClick={() => handleInfoUser()}
                              ></i>
                         </div>
                         <div>
                              <i 
                                   className="fa-solid fa-cart-shopping cursor-pointer"
                                   onClick={() => navigate('/konghiuwatch/cart')}
                              ></i>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Header