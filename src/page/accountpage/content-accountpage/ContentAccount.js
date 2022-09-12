import React from 'react'
import { useSelector } from 'react-redux'
import { clsx } from 'clsx'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Link_content_accountpage } from '../arrayToRender';

const ContentAccount = () => {

     const userAccount = useSelector(state => state.storeAccount).username;
     const location = useLocation();

     return (
          <div className='sign-page global-width'>
               <div className='flex'>
                    <p>Trang chủ / </p>
                    <p className='color-main ml-1'>tài khoản</p>
               </div>
               <div className='flex w-full mt-20'>
                    <div className='w-1/4'>
                         <p className='text-2xl'>TRANG TÀI KHOẢN</p>
                         <h5 className='font-medium'>Xin chào, { userAccount } !</h5>
                         <div className='mt-10 grid'>
                              {
                                   Link_content_accountpage.map(item => (
                                        <Link
                                             to={item.url}
                                             key={item.id}
                                             className={clsx('my-1.5 hover__color-main', {
                                                  'color-main': location.pathname.includes(item.url) || (location.pathname.split('/').join('') === 'konghiuwatchaccount' && item.id === 1)
                                             })}
                                        >{item.name}</Link>
                                   ))
                              }
                         </div>
                    </div>
                    <div className='flex-1'>
                    <Outlet />
                    </div>
               </div>
          </div>
     )
}

export default ContentAccount