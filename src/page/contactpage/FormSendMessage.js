import React, { useState } from 'react'
import Input from '../../pattern/Input';

const FormSendMessage = () => {
     
     const [ fullname, setFullname ] = useState('');
     const [ userphone, setUserphone ] = useState('');
     const [ useremail, setUseremaill ] = useState('');
     const [ content, setContent ] = useState('');
     
     return (
          <div>
               <form     
                    action='' 
                    className='form-send-message'
               >
                    <div className='input-name'>
                         <Input
                              type='text'
                              placeholder='Họ và tên'
                              value={fullname}
                              handleChangeValue={value => setFullname(value)}
                              notify=''
                              />
                    </div>
                    <div className='input-phone'>
                         <Input
                              type='text'
                              placeholder='Số điện thoại'
                              value={userphone}
                              handleChangeValue={value => setUserphone(value)}
                              notify=''
                              />
                    </div>
                    <div className='input-mail'>
                         <Input
                              type='text'
                              placeholder='Email'
                              value={useremail}
                              handleChangeValue={value => setUseremaill(value)}
                              notify=''
                         />
                    </div>
                    <div className='input-content'>
                         <textarea
                              className='outline-none px-5 py-1 border-w-1 w-full h-40 bg-gray-50 rounded-sm'
                              placeholder='Nội dung'
                              value={content}
                              onChange={e => setContent(e.target.value)}
                         />
                    </div>
                    <button
                         className='w-fit px-10 py-3 bg-main text-white font-normal text-xl'
                    >Gửi tin nhắn</button>
               </form>
          </div>
     )
}

export default FormSendMessage