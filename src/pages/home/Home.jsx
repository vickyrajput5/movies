import React from 'react'
import './style.scss'
import HeroBanner from './herobanner/HeroBanner'
import Treding from './trending/Treding'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Treding/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
