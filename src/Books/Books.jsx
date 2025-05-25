import React from 'react'
import Book from '../components/Book'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import ImageSlider from '../components/ImageSlider'
function Books() {
  return (
    <>
    <Navbar/>
    
    <div className='w-full pt-20 '>
    <ImageSlider/>
        
    <Book/>
    </div>
    <Footer/>
    </>
  
  )
}

export default Books