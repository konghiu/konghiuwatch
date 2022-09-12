import React from 'react'
import img_news from '../../image/img_news.webp'

const NewsItemsBig = () => {
     return (
          <div className='w-full flex mb-8 pb-8 border-b-1'>
               <div className='flex-1'>
                    <img src={img_news} alt='' className='w-full h-full' />
               </div>
               <div className='flex-1 pl-5'>
                    <p className='my-2 font-bold text-xl hover:text-orange-400 cursor-pointer'>Cách phối dây da đơn giản cực kỳ hiệu quả</p>
                    <div className='flex items-center opacity-60'>
                         <i className="fa-regular fa-clock"></i>
                         <p className='pl-1'>15/11/2021</p>
                    </div>
                    <p className='my-2'>Người mệnh Kim Mặt đồng hồ có dạng hình tròn, hình oval, hình elip tượng trưng cho hành kim, bạn nên chọn những kiểu hình mặt đồng hồ này để tương hợp với bản mệnh. Dây đeo màu nâu, vàng, vàng bò tượng trưng cho hành thổ (Thổ sinh Kim) sẽ rất hợp với người mệnh Kim. Đeo dây màu nâu man...</p>
                    <div className='flex items-center w-fit cursor-pointer'>
                         <p className='h-fit font-normal hover:text-orange-400 pr-2'>xem thêm </p>
                         <i className="fa-solid fa-arrow-right-long mt-1 color-main"></i>
                    </div>
               </div>
          </div>
     )
}

export default NewsItemsBig