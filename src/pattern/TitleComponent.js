import React from 'react'

const TittleComponent = (props) => {
     return (
          <div className='flex flex-col items-center pb-10'>
               <p className='text-4xl font-semibold'>{props.title}</p>
               <span className='bg-orange-500 w-28 h-0.5 mt-2'></span>
          </div>
     )
}

export default TittleComponent