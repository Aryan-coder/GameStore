import React from 'react'
import './Home.scss'
import Nav from '../../Components/Nav'
import Search from '../../Components/Search'
import Slider from '../../Components/Slider'

export default function Home() {
  return (<div className='Home' >
        <Nav/>
        <Search/>
        <Slider/>
  </div>)
}
