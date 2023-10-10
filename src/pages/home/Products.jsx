import  { Fragment } from 'react'
import {NavLink, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <Fragment>
      <div>
      <input type="search" placeholder='Search products'/>
      </div>
      <nav className='link-items'>
        <NavLink   to="/products/featured"> Featured</NavLink>
        <NavLink   to="/products/new">New</NavLink>
      </nav>
       <Outlet/>
    </Fragment>
  )
}

export default Products