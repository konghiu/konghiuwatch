import React from 'react'
import AweSection1 from './AweSection1'
import AweSection2 from './AweSection2'
import AweSection3 from './AweSection3'
import AweSection4 from './AweSection4'
import AweSection5 from './AweSection5'
import AweSection6 from './AweSection6'
import AweSection7 from './AweSection7'
import AweSection8 from './AweSection8'
import BannerHomepage from './BannerHomepage'
import './homepage.css'

const Homepage = () => {

     return (
          <div className='flex flex-col items-center'>
               <BannerHomepage />
               <AweSection1 />
               <div className='global-width'>
                    <AweSection2 />
                    <AweSection3 />
               </div>
               <AweSection4 />
               <AweSection5 />
               <AweSection6 />
               {/* <AweSection7 /> */}
               <AweSection8 />
          </div>
     )
}

export default Homepage