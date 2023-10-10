
import './App.css'
import React from 'react'
import { Fragment } from "react"
import Home from "./pages/home/Home"
// import About from "./pages/home/About"
import Products from "./pages/home/Products"
import Error from './pages/home/Error'
import Navibar from './pages/home/Navibar'
import { Route, Routes } from "react-router-dom"
import OrderSummary from './pages/OrderSummary'
import FeaturedProducts from './pages/home/FeaturedProducts'
import NewProducts from './pages/home/NewProducts'
import Users from './pages/home/Users'
import UserDetails from './pages/home/UserDetails'
import Admin from './pages/home/Admin'
import Profile from './pages/home/Profile'
import { AuthProvider } from './pages/home/Auth'
import Login from './pages/home/Login'



const LazyAbout=React.lazy(()=> import("./pages/home/About"))
const App = () => {
  return (
    <Fragment>
    <AuthProvider>
    <Navibar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<React.Suspense fallback='Loading..'>
          <LazyAbout/>
          </React.Suspense>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured'element={<FeaturedProducts/>}/>
          <Route path='new'element={<NewProducts/>}/>
        </Route>
        <Route path='order-summary'element={<OrderSummary/>}/>

        <Route path='users'element={<Users/>}>
          <Route path=':userId'element={<UserDetails/>}/>
          <Route path='admin'element={<Admin/>}/>
        </Route>
        <Route path='profile'element={<Profile/>}/>
        <Route path='login'element={<Login/>}/>
           
       
        
        <Route path='*' element={<Error/>}/>
      </Routes>
    </AuthProvider>
     

   
      
     
      
    </Fragment>
  )
}

export default App


