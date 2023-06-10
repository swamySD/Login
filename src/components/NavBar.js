import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
const NavBar = () => {
    const navigate=useNavigate()
    let token=localStorage.getItem('token')
    const logoutHandler=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly' ,backgroundColor:'green',padding:'10px',color:'white',width:'100%'}}>
        <Link to="/">Home</Link>
        {!token&& <Link to="/login">Login</Link>}
        {token?<Link to="/products">products</Link>:''}      
      {token&& <button onClick={logoutHandler}>Logout</button>}
       
    </div>
  )
}

export default NavBar