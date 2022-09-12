import React from 'react'
import './ortherpagecss.css'

const ButtonBackToTop = () => {

     const handleBackToTop = () => {
          const timer = setInterval(() => {
               const pageY = document.documentElement.scrollTop -= 50;
               if(pageY <= 0) {
                    clearInterval(timer)
               }
          }, 20)
     }

     return (
          <button 
               className='button-back-to-top'
               onClick={() => handleBackToTop()}
          >
               <i className="fa-solid fa-circle-up"></i>
          </button>
     )
}

export default ButtonBackToTop