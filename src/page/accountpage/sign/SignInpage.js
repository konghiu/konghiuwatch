import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Input from '../../../pattern/Input'
import { SIGN_IN } from '../../../redux/actions';

const SignInpage = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     
     const [ useremail, setUseremail ] = useState('');
     const [ password, setPassword ] = useState('');
     const [ notify, setNotify ] = useState({});

     const onSignIn = () => {
          if(useremail !== '' && password !== '') {
               if(useremail.includes('@gmail.com') && useremail.length > 10) {
                    fetch('http://localhost:8081/api/user/sign-in', {
                         method: 'post',
                         headers: {
                              'Content-Type': 'application/json'
                         },
                         body: JSON.stringify({
                              useremail: useremail,
                              password: password
                         })
                    })
                    .then(res => res.json())
                    .then(res => {
                         console.log(res)
                         if(res.notify.type === 'success') {
                              dispatch(SIGN_IN(res.data))
                              navigate('/konghiuwatch/account')
                         } else {
                              setNotify(res.notify)
                         }
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
               <div className='' action=''>
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
                    <p className='text-red-500 cursor-pointer hover:underline w-fit'>Quên mật khẩu?</p>
                    <button 
                         className='bg-black text-white w-full py-3 font-semibold text-xl my-5 hover__bg-main'
                         onClick={() => onSignIn()}     
                    >Đăng nhập</button>
               </div>
               <div className='flex justify-center'>
                    <p className='text-center w-2/3 text-sm opacity-60'>Template Claten cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.</p>
               </div>
          </div>
     )
}

export default SignInpage