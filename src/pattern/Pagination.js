import React, { useEffect, useState } from 'react'

const Pagination = (props) => {

     const quantity = Math.ceil(props.quantitypage);

     const [ currentpage, setCurrentpage ] = useState(1);

     const handleNextPage = (number) => {
          setCurrentpage(number)
     }

     useEffect(() => {
          props.handleSeeMoreProduct(currentpage)
     }, [currentpage, props])

     return (
          quantity > 1
          &&
          <div className='pagination'>
               <div className='flex items-center w-fit'>
                    <i 
                         className="fa-solid fa-angles-left mr-5 text-sm cursor-pointer"
                         style={currentpage === 1 ? {'color': 'transparent'} : {}}
                         onClick={() => setCurrentpage(prev => {
                              if(prev !== 1) return prev - 1
                              return prev
                         })}
                    ></i>
                    <p className=' cursor-pointer mx-1 w-12 h-12 hidden items-center justify-center rounded-full border-1 text-2xl font-normal'
                         onClick={e => handleNextPage(Number(e.target.innerHTML)) }
                         style={currentpage === quantity ? {'display': 'flex'} : {}}
                    >{currentpage - 1}</p>
                    <p className=' cursor-pointer mx-1 w-12 h-12 flex items-center justify-center rounded-full bg-main text-white text-2xl font-normal'>{currentpage}</p>
                    <p className=' cursor-pointer mx-1 w-12 h-12 flex items-center justify-center rounded-full border-1 text-2xl font-normal'
                         onClick={e => handleNextPage(Number(e.target.innerHTML)) }
                         style={currentpage === quantity ? {'display': 'none'} : {}}
                    >{currentpage + 1}</p>
                    <i 
                         className="  cursor-pointer ml-5 text-sm fa-solid fa-angles-right"
                         style={currentpage === quantity ? {'color': 'transparent'} : {}}
                         onClick={() => setCurrentpage(prev => {
                              if(prev !== quantity) return prev + 1
                              return prev
                         })}
                    ></i>
               </div>
          </div>
     )
}

export default Pagination