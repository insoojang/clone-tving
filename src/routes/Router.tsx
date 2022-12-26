import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Header from '../layout/Header'
import Air from '../components/Air'
import Tv from '../components/TV'
import Movie from '../components/Movie'

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Air" element={<Air />} />
        <Route path="/TV" element={<Tv />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
