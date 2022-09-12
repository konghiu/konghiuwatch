import React from 'react'
import NewsItem from '../../pattern/NewsItem'

const NewsContent = () => {

     return (
          <div className='w-fulll'>
               <div className='grid grid-cols-3 gap-5'>
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
               </div> 
               <div className='pagination'>
                    <div className='flex items-center w-fit'>
                         <i className="fa-solid fa-angles-left mr-5 text-sm cursor-pointer"></i>
                         <p className=' cursor-pointer mx-1 w-12 h-12 flex items-center justify-center rounded-full bg-main text-white text-2xl font-normal'>1</p>
                         <p className=' cursor-pointer mx-1 w-12 h-12 flex items-center justify-center rounded-full border-1 text-2xl font-normal'>2</p>
                         <i className="  cursor-pointer ml-5 text-sm fa-solid fa-angles-right"></i>
                    </div>
               </div>
          </div>
     )
}

export default NewsContent