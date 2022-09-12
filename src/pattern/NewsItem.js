import React from 'react'
import img_news from '../image/img_news.webp'

const NewsItem = () => {
     return (
          <div>
               <div>
                    <img src={img_news} alt='' className='w-full h-full' />
               </div>
               <p className='my-2 font-bold text-xl hover:text-orange-400 cursor-pointer'>Cách phối dây da đơn giản cực kỳ hiệu quả</p>
               <div className='flex items-center opacity-60'>
                    <i className="fa-regular fa-clock"></i>
                    <p className='pl-1'>15/11/2021</p>
               </div>
               <p className='my-2 opacity-60'>Phối màu đồng bộ với mặt đồng hồ hoặc phù hợp với một chi tiết nhỏ của đồng hồ</p>
               <div className='flex items-center w-fit cursor-pointer'>
                    <p className='h-fit hover:text-orange-400 pr-2'>xem thêm </p>
                    <i className="fa-solid fa-arrow-right-long mt-1 color-main"></i>
               </div>
          </div>
     )  
}

export default NewsItem