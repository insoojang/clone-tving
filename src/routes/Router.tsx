import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Header from '../layout/Header'
import Air from '../components/Air'
import Movie from '../components/Movie'
import Contents from '../layout/Contents'
import TV from '../components/tv/TV'
import Trailer from '../layout/Trailer'
import HomeContents from '../components/home/HomeContents'
import TVContents from '../components/tv/TVContents'
import TVTrailer from '../components/tv/TVTrailer'
import HomeTrailer from '../components/home/HomeTrailer'

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/air" element={<Air />} />
        <Route path="/tV" element={<TV />} />
        <Route path="/contents/home/:id" element={<HomeContents />} />
        <Route path="/contents/tv/:id" element={<TVContents />} />
        <Route path="/contents/home/trailer/:id" element={<HomeTrailer />} />
        <Route path="/contents/tv/trailer/:id" element={<TVTrailer />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
