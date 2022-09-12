import React from 'react'
import TittleComponent from '../../pattern/TitleComponent'
import FormSendMessage from './FormSendMessage'
import './contactpage.css'

const array = [
     {
          content: ' Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, TP Hà Nội',
          icon: 'fa-solid fa-location-dot'
     },
     {
          content: ' 0392 53 4842',
          icon: 'fa-solid fa-phone'
     },
     {
          content: 'konghiudev@gmail.com',
          icon: 'fa-solid fa-envelope'
     },
     {
          content: 'Giờ làm việc: Từ 9:00 đến 22:00 các ngày trong tuần từ Thứ 2 đến Chủ nhật',
          icon: 'fa-solid fa-clock'
     }
]

const Contactpage = () => {
     return (
          <div className='constructor-page'>
               <div className='global-width'>
                    <div className='flex justify-center'>
                         <p>Trang chủ / </p>
                         <p className='color-main ml-1'>liên hệ</p>
                    </div>
                    <div className='mt-10'>
                         <TittleComponent title="BẢN ĐỒ VĂN PHÒNG" />
                         <div>
                              <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27218.838292164663!2d-118.2407923888806!3d34.05679306300011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1662099469294!5m2!1svi!2s" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                         </div>
                    </div>
                    <div className='mt-10'>
                         <TittleComponent title="LIÊN HỆ VỚI CHÚNG TÔI" />
                         <div className='flex'>
                              <div className='flex-1'>
                                   <p className='font-semibold text-2xl'>THÔNG TIN LIÊN HỆ</p>
                                   <p className='text-xl mt-3 mb-7'>Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.</p>
                                   <FormSendMessage />
                              </div>
                              <div className='flex-1 pl-20'>
                                   <h4 className='font-medium'>CỬA HÀNG ĐỒNG HỒ CLATEN</h4>
                                   <ul className='font-normal mt-5'>
                                        {
                                             array.map((item, index) => (
                                                  <li key={index} className='flex items-center mb-10'>
                                                       <i className={item.icon + ' text-white text-sm w-7 h-7 flex items-center justify-center bg-main mr-5'}></i>
                                                       <span 
                                                            className='opacity-90 flex-1'
                                                            style={item.icon.includes('phone') ? {'color': '#f97e6c', 'fontSize': '24px', 'fontWeight': '500', 'opacity': '100%'} : {}}
                                                       > {item.content}</span>
                                                  </li>
                                             ))
                                        }
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Contactpage