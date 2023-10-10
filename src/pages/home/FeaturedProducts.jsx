import  { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const FeaturedProducts = () => {
  const btnGoBack=useNavigate()
  const handleBtnGoBack=()=>{
    btnGoBack('/',{replace:true})
  }
  return (
   <Fragment>
    <p>List of featured products</p>
    <button onClick={handleBtnGoBack}>Go back</button>
    
   </Fragment>
  )
}

export default FeaturedProducts