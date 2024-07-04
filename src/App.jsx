import React from 'react'
import Nav from './components/Nav'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marques from './components/Marques'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-[#000]  w-full overflow-x-hidden text-white'>
      <Nav/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marques/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App