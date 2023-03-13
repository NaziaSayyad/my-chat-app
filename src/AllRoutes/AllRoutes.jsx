import React from 'react'
import { Route } from 'react-router-dom'
import ChatPage from '../Pages/Chat'

function AllRoutes() {
  return (
    <>
    <Route path="/" element={ <SignupPage />} />
    <Route path="/chat" element = {<ChatPage />}/>
    <Route path="/login" element={<LoginPage />} />
    </>
  )
}

export default AllRoutes
