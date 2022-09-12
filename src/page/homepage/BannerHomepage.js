import React from 'react'
import banner_desktop from '../../image/banner-desktop.webp'

const BannerHomepage = () => {
     return (
          <div className='w-full h-banner'>
               <img src={banner_desktop} alt='' className='w-full h-full' />
          </div>
     )
}

export default BannerHomepage