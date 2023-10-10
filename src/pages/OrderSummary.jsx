import  { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const Navigate=useNavigate()
    const handleNavigateBack=()=> {
        Navigate(-1)
    }
    /**bấm vào button Go Back thì trả về trang Home
     * vs cái button Place Order
     */
  return (
   <Fragment>
    <span>Order Confirm!</span>
    <button onClick={handleNavigateBack}>Go back</button>
   </Fragment>
  )
}

export default OrderSummary