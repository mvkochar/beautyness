import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Home, License, Locations, NotFound, Protected, Services, StyleGuide, Team } from '../../pages'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='services'
        element={<Services />}
      />
      <Route
        path='team'
        element={<Team />}
      />
      <Route
        path='contact'
        element={<Contact />}
      />
      <Route
        path='blog'
        element={<Blog />}
      />
      <Route
        path='locations'
        element={<Locations />}
      />
      <Route
        path='protected'
        element={<Protected />}
      />
      <Route
        path='style-guide'
        element={<StyleGuide/>}
      />
      <Route
        path='license'
        element={<License/>}
      />
      <Route
        path='/*'
        element={<NotFound />}
      />
    </Routes>
  )
}

export default Main