import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { SIGN_OUT } from '../../../redux/actions';
import Loading from '../../../pattern/Loading'

const SignOutpage = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();

     useEffect(() => {
          dispatch(SIGN_OUT(true))
          navigate('/konghiuwatch/account/sign/sign-in')
     }, [dispatch, navigate])

     return (
          <div
               style={{'height': '100vh', 'width': '100vw'}}
          >
               <Loading />
          </div>
     )
}

export default SignOutpage