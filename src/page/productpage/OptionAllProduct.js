import React, { useEffect, useState } from 'react'
import donghomau from '../../image/dong-ho-mau.webp'
import { bosuutap, kichco, mausac, sapxep } from './arrayToRender'


const OptionAllProduct = (props) => {

     const [ optionCollection, setOptionCollection ] = useState('');
     const [ optionColor, setOptionColor ] = useState('');
     const [ optionSize, setOptionSize ] = useState({tittle: ''});
     const [ optionSort, setOptionSort ] = useState({
          tittle: sapxep[0].tittle,
          action: sapxep[0].action,
     })
     
     useEffect(() => {
          let newList = [];
          if(optionCollection !== '') {
               const listProductCollection = props.listProduct.filter(item => item.type_watch === optionCollection)
               newList = newList.concat(listProductCollection)
               if(optionSize.tittle !== '') {
                    const min = optionSize.min;
                    const max = optionSize.max;
                    const listProductSize = listProductCollection.filter(item => item.productinfoanother.shell_diameter > min && item.productinfoanother.shell_diameter <= max)
                    newList = listProductSize
               }
          }
          else if(optionSize.tittle !== '' && optionCollection === '') {
               const min = optionSize.min;
               const max = optionSize.max;
               const listProductSize = props.listProduct.filter(item => item.productinfoanother.shell_diameter > min && item.productinfoanother.shell_diameter <= max)
               newList = newList.concat(listProductSize)
          }
          else {
               newList = props.listProduct
          }
          if(newList.length === 0) {
               return props.handleSetListProduct('Không có bất kỳ sản phẩm nào!')
          }
          props.handleSetListProduct(newList)
     }, [optionCollection, optionColor, optionSize.tittle])


     return (
          <div>
               {
                    [optionCollection, optionColor, optionSize.tittle].some(item => item !== '')
                    &&
                    <div className=''>
                         <h6 className='font-semibold color-main'>Bạn chọn</h6>
                         <div className='flex w-full my-2'>
                              {[optionCollection, optionColor, optionSize.tittle].map((item, index) => (
                                   item !== ''
                                   &&
                                   <div className='flex items-center mr-5' key={index}>
                                             <i className='fa-solid fa-x  text-sm cursor-pointer'
                                                  onClick={() => {
                                                       console.log(index)
                                                       if(index === 0) {
                                                            return setOptionCollection('')
                                                       } else if(index === 1) {
                                                            return setOptionColor('')
                                                       } 
                                                       return setOptionSize({tittle: ''})
                                                  }}
                                             ></i>
                                        <p className='pl-1  text-base hover__color-main'>{item}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               }
               <div className='option-all-product'>
                    <div className='option'>
                         <div className='bosuutap'>
                              <p className='font-semibold cursor-pointer'>BỘ SƯU TẬP</p>
                              <div className='bosuutap-option'>
                                   {
                                        bosuutap.map(item => (
                                             <div className='flex mx-5 items-center' key={item.id}>
                                                  <div className='w-20 h-20'>
                                                       <img src={donghomau} alt='' className='w-full h-full' />
                                                  </div>
                                                  <p 
                                                       className='font-normal ml-2 hover__color-main hover:underline cursor-pointer'
                                                       onClick={(e) => setOptionCollection(e.target.innerHTML)}
                                                  >{item.tittle}</p>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                         <div className='mausac'>
                              <p className='font-semibold cursor-pointer'>MÀU SẮC</p>
                              <div className='mausac-option'>
                                   {
                                        mausac.map(item => (
                                             <div className='flex mx-5 items-center' key={item.id}>
                                                  <div className='border-1 w-10 h-10'>
                                                       <div className='w-full h-full' style={item.color ? {'backgroundColor': item.color} : {'backgroundColor': '#fff'}}></div>
                                                  </div>
                                                  <p 
                                                       className='font-normal ml-2 hover__color-main hover:underline cursor-pointer'
                                                       onClick={(e) => setOptionColor(e.target.innerHTML)}   
                                                  >{item.tittle}</p>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                         <div className='kichco'>
                              <p className='font-semibold cursor-pointer'>KÍCH CỠ</p>
                              <div className='kichco-option'>
                                   {
                                        kichco.map(item => (
                                             <ul className='flex mx-5 items-center' key={item.id}>
                                                  <li 
                                                       className='font-normal ml-2 hover__color-main hover:underline cursor-pointer'
                                                       onClick={(e) => setOptionSize({
                                                            tittle: item.tittle,
                                                            min: item.min,
                                                            max: item.max,
                                                       })}     
                                                  >{item.tittle}</li>
                                             </ul>
                                        ))
                                   }
                              </div>
                         </div>
                    </div>
                    <div className='sapxep flex items-center'>
                         <p className='mr-5'>Sắp xếp theo</p>
                         <div className='option-sapxep w-32 cursor-pointer rounded-sm border-1 bg-white border-gray-300'>
                              <p className='w-full pl-2'>{optionSort.tittle}</p>
                              <ul className=''>
                                   {
                                        sapxep.map(item => (
                                             <li
                                                  key={item.id}
                                                  onClick={() => setOptionSort({
                                                       tittle: item.tittle,
                                                       action: item.action
                                                  })}
                                             >{item.tittle}</li>
                                        ))
                                   }
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default OptionAllProduct