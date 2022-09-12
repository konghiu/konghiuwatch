import React from 'react'
import { clsx } from 'clsx'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import button_fb from '../../../image/fb-btn.svg'
import button_gg from '../../../image/gp-btn.svg'
import { button_sign } from '../arrayToRender'


const Signpage = () => {

     const location = useLocation();
     const navigate = useNavigate();

     const userAccount = useSelector(state => state.storeAccount);
     console.log(Object.keys(userAccount))

     return (
          Object.keys(userAccount).length === 0 
          ?
          <div className='sign-page global-width'>
               <div className='flex'>
                    <p>Trang chủ / </p>
                    <p className='color-main ml-1'>
                         {
                              location.pathname.includes('sign-in') ? 'đăng nhập' : 'đăng ký'
                         }
                    </p>
               </div>
               <div className='form-sign'>
                    <div className='flex items-center border-b-1 '>
                         {
                              button_sign.map(item => (
                                   <p 
                                        key={item.id}
                                        className={clsx('flex flex-col items-center flex-1 pt-3 border-r-1 text-center font-medium opacity-50', {
                                             'opacity-100': location.pathname.includes(item.url),
                                             'cursor-pointer + hover__color-main + opacity-100': !location.pathname.includes(item.url),
                                        })}
                                        onClick={() => navigate(item.url)}
                                        >
                                        {item.name}
                                        <span 
                                             className={clsx('w-5/6 h-0.5 bg-transparent mt-3', {
                                                  'bg-main': location.pathname.includes(item.url)
                                             })}
                                             
                                        ></span>
                                   </p>
                              ))
                         }
                    </div>
                    <Outlet />
                    <div>
                         <div className='flex justify-center items-center'>
                              <p className='border-t-1 flex-1'></p>
                              <p className='border-1 text-base rounded-xl px-5 opacity-60'>Hoặc đăng nhập bằng</p>
                              <p className='border-t-1 flex-1'></p>
                         </div>
                         <div className='my-5 flex justify-center'>
                              <div className='h-10 mr-2 cursor-pointer'>
                                   <img src={button_fb} alt='' className='w-full h-full' />
                              </div>
                              <div className='h-10 ml-2 cursor-pointer'>
                                   <img src={button_gg} alt='' className='w-full h-full' />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          :
          <div className='global-width flex items-center justify-center py-10'>
               <div className='flex flex-col items-center'>
                    <p className='font-medium mb-2'>Bạn đã đăng nhập</p> 
                    <button 
                         className='px-5 py-1 bg-main text-white hover:bg-black'
                         onClick={() => navigate('/konghiuwatch/account')}     
                    >đến trang cá nhân</button> 
               </div>
          </div>
     )
}

export default Signpage