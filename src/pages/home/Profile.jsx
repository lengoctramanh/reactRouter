import  { Fragment } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const Auth=useAuth()
  const navigate=useNavigate()
  const handleLogout=()=> {
    Auth.logout()
    navigate('/')

  }
  return (
    <Fragment>
<div>Welcome {Auth.user}</div>
<button onClick={handleLogout}>Logout</button>
    </Fragment>
   
  )
}

export default Profile