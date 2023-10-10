import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  const handleNavigate=()=> {
    navigate('order-summary',{replace:true})
    
    /**bấm vào button trên path hiện ra order-summary,
     * đồng thời ở dưới hiện ra dòng chữ order confirm!
     */
  }
  /**lệnh Replace:true khi bấm vào một trình duyệt 
   * để tìm kiếm trang web thì copy cái path 
   * vào. Sau đó bấm button Go back thì quay
   * lại trang trình duyệt đầu tiên,cái trang
   * mà mình tìm kiếm trang web mình muốn
   */
  return (
    <Fragment>
        <span>Home Page</span>
        <button onClick={handleNavigate}>Place order</button>
    </Fragment>)
}

export default Home