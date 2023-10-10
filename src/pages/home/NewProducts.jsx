import  { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const NewProducts = () => {
  const btnContinue=useNavigate()
  const handleBtnContinue=()=> {
    btnContinue("/about",{replace:true})
  }
  return (
    <Fragment>
<p>List of new products</p>
<button onClick={handleBtnContinue}>Continue</button>
    </Fragment>
    
  )
}

export default NewProducts