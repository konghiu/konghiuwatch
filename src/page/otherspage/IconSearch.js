import React, { useState } from 'react'

const IconSearch = () => {

     const [ search, setSearch ] = useState('');

     return (
          <div 
               className='icon-search'
               onMouseLeave={() => {
                    document.querySelector('input').style.display = 'none'
               }}
               onMouseOver={() => {
                    document.querySelector('input').style.display = 'block'
               }}
          >
               <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
               <input 
                    type='text'
                    placeholder='Tìm kiếm sản phẩm'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
               />
          </div>
     )
}

export default IconSearch