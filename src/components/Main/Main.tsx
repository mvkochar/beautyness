import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  About, Blog, Changelog, Contact, Home, License, Locations, NotFound, Protected,
  Services, StyleGuide, Team, TeamSingle
} from '../../pages'

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
        element={<StyleGuide />}
      />
      <Route
        path='license'
        element={<License />}
      />
      <Route
        path='changelog'
        element={<Changelog />}
      />
      <Route
        path='team-member/:id'
        element={<TeamSingle />}
      />
      <Route
        path='/*'
        element={<NotFound />}
      />
    </Routes>
  )
}

export default Main