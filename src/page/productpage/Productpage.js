import React, { useState } from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import news_banner from '../../image/news_banner.webp'
import Loading from '../../pattern/Loading'
import './productpage.css'

const Productpage = () => {

     
     const [ loading, setLoading ] = useState(true);

     useEffect(() => {
          setLoading(false)
     }, [])

     return (
          <React.Fragment>
               {
                    loading && <Loading />
               }
               <div className='product-page'>
                    <div>
                         <img src={news_banner} alt='' />
                    </div>
                    <div className='global-width self-center py-10'>
                         <div className='flex justify-center'>
                              <p>Trang chủ / </p>
                              <p className='color-main ml-1'>sản phẩm</p>
                         </div>
                    </div>
                    <Outlet />
               </div>
          </React.Fragment>
     )
}

export default Productpage