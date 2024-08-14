import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Home, Services, Team } from '../../pages'

const Main = () => {
  return (
    <Routes>
        <Route
           path='/'
           element={<Home/>} 
        />
        <Route
          path='about'
          element={<About/>}
        />
        <Route
          path='services'
          element={<Services/>}
        />
        <Route
          path='team'
          element={<Team/>}
        />
        <Route
          path='contact'
          element={<Contact/>}
        />
        <Route
          path='blog'
          element={<Blog/>}
        />
    </Routes>
  )
}

export default Main