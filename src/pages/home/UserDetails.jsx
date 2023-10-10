import { Fragment } from 'react'
import { useParams } from 'react-router-dom'


const UserDetails = () => {
  // const params =useParams()
  // const userId= params.userId
  /**ghi gon lai */
  const {userId}=useParams()

  return (
   
    <Fragment>
<p>Details about user {userId}</p>

    </Fragment>
  )
}

export default UserDetails