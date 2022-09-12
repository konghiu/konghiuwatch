import React from 'react'
import TittleComponent from '../../pattern/TitleComponent'
import { aweSection2 } from './arrayToRender'

const AweSection2 = () => {
     return (
          <div className='awe-section-2 w-full py-10'>
               <TittleComponent title="DANH MỤC SẢN PHẨM" />
               <div className="block columns-2">
                    {
                         aweSection2.map(item => (
                              <div 
                                   className="mb-4 w-full relative overflow-hidden" 
                                   key={item.id}
                                   id={`item-${item.id}-awesection-2`}
                              >
                                   <img 
                                        className='w-full h-full' 
                                        src={item.image} 
                                        alt='' 
                                   />
                                   <div className='absolute bottom-10 left-10 w-fit'>
                                        <p className='font-semibold text-4xl hover:text-orange-500 cursor-pointer'>{item.title}</p>
                                        <p className='text-lg font-medium hover:text-orange-500 cursor-pointer'>xem them</p>
                                   </div>
                              </div>
                         ))
                    }
               </div>
          </div>
     )
}

export default AweSection2