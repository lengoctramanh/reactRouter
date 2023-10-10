import { Fragment, useState }from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user,setUser]=useState('')
    const Auth =  useAuth
    const navigate=useNavigate()
    const handleInput=(e)=> {
     setUser(e.target.value)
    }
    const handleLogin=()=> {
      Auth.Login(user)
      navigate('/')

    }
  return (
  <Fragment>
    <label>
    Username:{''}
    <input type="text" onChange={handleInput} />
    </label>
    <button onClick={handleLogin}>Login</button>
    
    </Fragment>
  )
}

export default Login