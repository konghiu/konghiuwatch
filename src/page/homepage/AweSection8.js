import React from 'react'
import NewsItem from '../../pattern/NewsItem'
import TittleComponent from '../../pattern/TitleComponent'

const AweSection8 = () => {
     return (
          <div className='awe-section-8 flex justify-center py-10'>
               <div className='global-width'>     
                    <TittleComponent title="TIN TỨC" />
                   <div className=' grid grid-cols-3 gap-5'>
                    <NewsItem />
                         <NewsItem />
                         <NewsItem />
                   </div>
               </div>
          </div>
     )
}

export default AweSection8