import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../../pattern/Input'

const SignUppage = () => {

     const navigate = useNavigate();

     const [ username, setUsername ] = useState('');
     const [ userphone, setUserphone ] = useState('');
     const [ useremail, setUseremail ] = useState('');
     const [ password, setPassword ] = useState('');
     const [ notify, setNotify ] = useState('');


     const onSignUp = (...info) => {
          if(info.find(item => item !== '')) {
               if(useremail.includes('@gmail.com') && useremail.length > 10) {
                    fetch('http://localhost:8081/api/user/', {
                    method: "post",
                    headers: {
                         'Content-Type': ' application/json'
                    },
                    body: JSON.stringify({
                         username: username,
                         useremail: useremail,
                         userphone: userphone,
                         password: password,
                         usercart: [],
                         usertransaction: []
                    })
                    })
                    .then(res => res.json())
                    .then(res => {
                         setNotify(res.notify)
                         setTimeout(() => {
                              setNotify({})
                              navigate('/konghiuwatch/account/sign/sign-in')
                         }, 2000)
                    })
                    .catch(err => console.log(err.message))
               } else {
                    setNotify({
                         type: 'email',
                         message: 'email sai cú pháp'
                    })
               }
          } else {
               setNotify({
                    type: 'empty',
                    message: 'Yêu cầu nhập thông tin'
               })
          }
     }


     return (
          <div className='p-5 w-full'>
               <div className='' >
                    {
                         notify.type === 'success' &&
                         <p className='my-2 text-green-500'>{notify.message}</p>
                    }
                    <label className='font-semibold'>TÊN NGƯỜI DÙNG<span className='text-red-500 text-xl ml-1'>*</span></label>
                    <div className='mt-1 mb-5'>
                         <Input 
                              type='text'
                              placeholder='Tên người dùng'
                              value={username}
                              handleChangeValue={value => setUsername(value)}
                              notify={notify}
                              handleRemoveNotify={() => setNotify({})}
                         />
                    </div>
                    <label className='font-semibold'>SỐ ĐIỆN THOẠI<span className='text-red-500 text-xl ml-1'>*</span></label>
                    <div className='mt-1 mb-2'>
                         <Input 
                              type='phone'
                              placeholder='Nhập Số điện thoại'
                              value={userphone}
                              handleChangeValue={value => setUserphone(value)}
                              notify={notify}
                              handleRemoveNotify={() => setNotify({})}
                         />
                    </div>
                    <label className='font-semibold'>EMAIL<span className='text-red-500 text-xl ml-1'>*</span></label>
                    <div className='mt-1 mb-5'>
                         <Input 
                              type='email'
                              placeholder='Nhập địa chỉ Email'
                              value={useremail}
                              handleChangeValue={value => setUseremail(value)}
                              notify={notify}
                              handleRemoveNotify={() => setNotify({})}
                         />
                    </div>
                    <label className='font-semibold'>MẬT KHẨU<span className='text-red-500 text-xl ml-1'>*</span></label>
                    <div className='mt-1 mb-2'>
                         <Input 
                              type='password'
                              placeholder='Nhập mật khẩu'
                              value={password}
                              handleChangeValue={value => setPassword(value)}
                              notify={notify}
                              handleRemoveNotify={() => setNotify({})}
                         />
                    </div>
                    <button 
                         className='bg-black text-white w-full py-3 font-semibold text-xl my-5 hover__bg-main'
                         onClick={() => onSignUp(username, useremail, userphone, password)}     
                    >Đăng nhập</button>
               </div>
               <div className='flex justify-center'>
                    <p className='text-center w-2/3 text-sm opacity-60'>Template Claten cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.</p>
               </div>
          </div>
     )
}

export default SignUppage