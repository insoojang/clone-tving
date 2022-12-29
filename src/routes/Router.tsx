import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Header from '../layout/Header'
import Air from '../components/Air'
import Movie from '../components/Movie'
import Contents from '../components/Contents'
import TV from '../components/TV'

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Air" element={<Air />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/Contents/:id" element={<Contents />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
