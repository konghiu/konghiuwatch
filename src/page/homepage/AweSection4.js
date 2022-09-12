import React from 'react'
import TittleComponent from '../../pattern/TitleComponent'
import watch_1 from '../../image/cate_1.webp'

const AweSection4 = () => {
     return (
          <div className='awe-section-4'>
               <div className='global-width py-10'>
                    <TittleComponent title="FLASH SALE HÀNG TUẦN" />
                    <div className='flex'>
                         <div className='w-1/2'>
                              <img src={watch_1} alt='' className='w-full h-full' />
                         </div>
                         <div className='pl-5'>
                              <p className='text-2xl font-bold'>Black Link</p>
                              <div className='flex my-5 items-center'>
                                   <p className='text-3xl font-bold color-main mr-5'>4.500.000đ</p>
                                   <p className='text-xl opacity-60 line-through'>4.500.000đ</p>
                              </div>
                              {/* timer */}
                              <div className='flex'>
                                   <div className='flex items-center px-4 py-1 flex-col mr-5 bg-main text-white'>
                                        <p className='font-bold text-3xl'>60</p>
                                        <p>Ngày</p>
                                   </div>
                                   <div className='flex items-center px-4 py-1 flex-col mr-5 bg-main text-white'>
                                        <p className='font-bold text-3xl'>60</p>
                                        <p>Giờ</p>
                                   </div>
                                   <div className='flex items-center px-4 py-1 flex-col mr-5 bg-main text-white'>
                                        <p className='font-bold text-3xl'>60</p>
                                        <p>Phút</p>
                                   </div>
                                   <div className='flex items-center px-4 py-1 flex-col mr-5 bg-main text-white'>
                                        <p className='font-bold text-3xl'>60</p>
                                        <p>Giây</p>
                                   </div>
                              </div>
                              <p className='my-5 font-normal opacity-60'>Đồng hồ MVMT Black Link dòng Classic với thiết kế tối giản tinh tế cho các quý ông hiện đại. Nhập khẩu chính hãng từ US. Free Ship toàn quốc</p>
                              <button className='px-10 py-1 border-1 color-main hover:text-white hover:bg-orange-400'>Mua ngay</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AweSection4