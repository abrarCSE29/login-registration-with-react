import React from 'react'
import TopNavBar from './TopNavBar'
import Footer from './Footer'
import LoginCard from './LoginCard'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <div>
      <TopNavBar/>
      <div className='inlineflex flex-spaceevenly flex-alignCenter'>
        <LoginCard/>
        <LoginForm/>
      </div>
      
      <Footer/>
    </div>
  )
}
