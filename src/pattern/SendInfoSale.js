import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const SendInfoSale = () => {

     const userAccount = useSelector(state => state.storeAccount);
     const [ contentEmail, setContentEmail ] = useState('');


     const handleSendEmail = () => {
          fetch('http://localhost:8081/email/send-email', {
               method: 'post',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                    useremail: 'dienmayxanhmc1807@gmail.com',
                    subject: "Gửi bằng nodejs",
                    content: contentEmail
               })
          })
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(err => console.log(err))
     }


     return (
          <div className='awe-section-9 bg-main'>
               <div className='global-width flex justify-between'>
                    <div className='flex-1 flex items-center'>
                         <p className='font-semibold text-lg text-white'>NHẬN THÔNG TIN KHUYẾN MÃI TỪ CHÚNG TÔI</p>
                    </div>
                    <div className='flex-1'>
                         <div className='w-full flex'>
                              <input 
                                   type='email'
                                   placeholder='Nhập email của bạn tại đây'
                                   className='text-lg py-2 px-5 flex-1 outline-none'
                                   value={contentEmail}
                                   onChange={(e) => setContentEmail(e.target.value)}
                              />
                              <p 
                                   className='cursor-pointer w-fit px-5 bg-black text-white flex items-center'
                                   onClick={() => handleSendEmail()}
                              >GỬI</p>
                         </div>
                    </div>
               </div>    
          </div>
     )
}

export default SendInfoSale