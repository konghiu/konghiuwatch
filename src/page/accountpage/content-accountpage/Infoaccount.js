import React from 'react'
import { useSelector } from 'react-redux';

const Infoaccount = () => {

     const userAccount = useSelector(state => state.storeAccount);
     
     return (
          <div>
               <p className='text-2xl'>THÔNG TIN TÀI KHOẢN</p>
               <p className='my-5 text-xl'><span className='font-semibold mr-1'>Họ tên: </span><span>{userAccount.username}</span></p>
               <p className='text-xl'><span className='font-semibold mr-1'>Email: </span><span className='text-bold'>{userAccount.username}</span></p>
          </div>
     )
}

export default Infoaccount