import React from 'react'
import news_banner from '../../image/news_banner.webp'
import NewsContent from './NewsContent'
import NewsItemsBig from './NewsItemsBig'
import './newspage.css'

const Newspage = () => {
     return (
          <div className='news-blog'>
               <div>
                    <img src={news_banner} alt='' />
               </div>
               <div className='global-width py-10'>
                    <div className='flex justify-center'>
                         <p>Trang chủ / </p>
                         <p className='color-main'>tin tức</p>
                    </div>
                    <div className='mt-10'>
                         <NewsItemsBig />
                         <NewsContent />
                    </div>
               </div>
          </div>
     )
}

export default Newspage