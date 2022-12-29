import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Header from '../layout/Header'
import Air from '../components/air/Air'
import TV from '../components/tv/TV'
import HomeContents from '../components/home/HomeContents'
import TVContents from '../components/tv/TVContents'
import TVTrailer from '../components/tv/TVTrailer'
import HomeTrailer from '../components/home/HomeTrailer'
import Search from '../search/Search'

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
        <Route path="/search/*" element={<Search />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
