import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/actions';
import './Login.css'
const Login = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
const navigate=useNavigate()
 let token=localStorage.getItem('token')
    const loginUser=(e)=>{
        e.preventDefault()
        
        dispatch(userLogin(name,password))
        navigate('/products')
    }

  return (
    <div className='login-container'>
        <form onSubmit={loginUser}>
            <div>
            <input type='text' 
            onChange={(e)=>setName(e.target.value)} placeholder='name' value={name}/>
            </div>
           <div>
            <input type='password' 
            onChange={(e)=>setPassword(e.target.value)} placeholder='password' value={password}/>
            </div>
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login