import  { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'


const Navibar = () => {
    const navLinkStyle=({isActive})=> {
        //cách css nâng cao hơn
        //thay vì css bên kia thì bên này luôn
       return {
        fontWeight:isActive?'bold':'normal',
        TextDecoderation:isActive?'none':'underline',
        padding:isActive?'10px 20px':'none',
       color:isActive?'red':''

       }
    }
    const Auth= useAuth()
  return (
   <Fragment>
    <div className="container-nav">
        <h1>Logo</h1>
      
        <NavLink style={navLinkStyle} to="/">Home</NavLink>
        <NavLink  style={navLinkStyle}   to="/products">Proudcts</NavLink>
        <NavLink  style={navLinkStyle}   to="/about">About</NavLink>
        <NavLink style={navLinkStyle} to="/profile">Profile</NavLink>
        {
          !Auth.user && (
            <NavLink style={navLinkStyle} to="/login">Login</NavLink>
          )
        }


      </div>
   </Fragment>
  )
}

export default Navibar


