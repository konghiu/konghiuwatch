import React from 'react'

const Introduce = () => {
     return (
          <div className='constructor-page'>
               <div className='global-width'>
                    <div className='flex justify-center'>
                         <p>Trang chủ / </p>
                         <p className='color-main'>giới thiệu</p>
                    </div>
                    <div className='mt-10'>
                         <div>
                              <p className='font-normal text-2xl'>Giới thiệu</p>
                              <div className='flex justify-between items-center bg-green-200 p-5 mt-5'>
                                   <p>Nội dung đang cập nhật.</p>
                                   <i className='fa-solid fa-x text-sm mr-10 cursor-pointer'></i>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Introduce