import React from 'react'
import { Link } from 'react-router-dom'
import headerBars from './header.json'
import logo from '../../image/logo.webp'
import './ortherpagecss.css'
import SendInfoSale from '../../pattern/SendInfoSale'

const Footer = () => {
     return (
          <React.Fragment>
               <SendInfoSale />
               <div className='footer'>
                    <div className='global-width'>
                         <div className='flex'>
                              {/* row 1 */}
                              <div className='row-1 w-2/5 pr-12'>
                                   <div className='mb-10'>
                                        <img src={logo} alt='' />
                                   </div>
                                   <div className='flex items-center mb-5'>
                                        <i className="fa-solid fa-location-dot text-xl w-10 h-10 flex items-center justify-center bg-main"></i>
                                        <p className=' opacity-50 ml-5 text-lg flex-1'>Quảng Hòa, Cam Thành Nam, Cam Ranh, Khánh Hòa</p>
                                   </div>
                                   <div className='flex items-center mb-5'>
                                        <i className="fa-solid fa-clock text-xl w-10 h-10 flex items-center justify-center bg-main"></i>
                                        <p className=' opacity-50 ml-5 text-lg flex-1'>Giờ làm việc: Từ 9:00 đến 22:00 các ngày trong tuần từ Thứ 2 đến Chủ nhật</p>
                                   </div>
                                   <div className='flex items-center mb-5'>
                                        <i className="fa-solid fa-phone text-xl w-10 h-10 flex items-center justify-center bg-main"></i>
                                        <p className='ml-5 text-lg flex-1'><span className='opacity-50'>hotline: </span> <span className='text-xl font-semibold color-main'>0392534842</span></p>
                                   </div>
                              </div>
                              {/* row 2 */}
                              <div className='row-2 w-1/5'>
                                   <p className='font-semibold text-lg mb-5'>Về chúng tôi</p>
                                   <div className='flex flex-col'>
                                        {
                                        headerBars.map(item => (
                                             <Link
                                                       to={'/konghiuwatch' + item.url}
                                                       key={item.id}
                                                       className='text-md w-fit mb-2 opacity-50 font-light hover:opacity-100 hover:text-orange-500'
                                                  >{item.title}</Link>
                                             ))
                                        }
                                   </div>
                              </div>
                              {/* row 3 */}
                              <div className='row-3 w-1/5'>
                                   <p className='font-semibold text-lg mb-5'>Hỗ trợ khách hàng</p>
                                   <div className='flex flex-col'>
                                        {
                                        headerBars.map(item => (
                                             <Link
                                                       to={'/konghiuwatch' + item.url}
                                                       key={item.id}
                                                       className='text-md w-fit mb-2 opacity-50 font-light hover:opacity-100 hover:text-orange-500'
                                                  >{item.title}</Link>
                                             ))
                                        }
                                   </div>
                              </div>
                              {/* row 4 */}
                              <div className='row-4 w-1/5'>
                                   <p className='font-semibold text-lg mb-5'>Dịch vụ</p>
                                   <div className='flex flex-col'>
                                        {
                                        headerBars.map(item => (
                                             <Link
                                                       to={'/konghiuwatch' + item.url}
                                                       key={item.id}
                                                       className='text-md w-fit mb-2 opacity-50 font-light hover:opacity-100 hover:text-orange-500'
                                                  >{item.title}</Link>
                                             ))
                                        }
                                   </div>
                                   <div className='flex'>
                                        <i className="fa-brands fa-youtube text-xl w-10 h-10 flex items-center justify-center bg-main hover:bg-white hover:text-orange-400"></i>
                                        <i className="fa-brands fa-facebook text-xl w-10 h-10 flex items-center justify-center bg-main hover:bg-white hover:text-orange-400 mx-2"></i>
                                        <i className="fa-brands fa-instagram text-xl w-10 h-10 flex items-center justify-center bg-main hover:bg-white hover:text-orange-400"></i>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </React.Fragment>
     )
}

export default Footer