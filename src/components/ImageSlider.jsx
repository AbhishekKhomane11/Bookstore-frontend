import React from 'react'
import Slider1 from '../../public/Slider1.jpg'
import Slider2 from '../../public/Slider2.jpg'
import Slider3 from '../../public/Slider3.jpg'
function ImageSlider() {
  return (
    <>
    <div className="carousel w-full h-[400px]">
  <div id="item1" className="carousel-item w-full">
    <img
      src={Slider1}
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={Slider2}
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={Slider3}
      className="w-full" />
  </div>
  
</div>
<div className="flex w- justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  
</div>
    </>
  )
}

export default ImageSlider