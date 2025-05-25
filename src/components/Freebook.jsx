import React,{useState, useEffect }from 'react'
//import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carts from './Carts';
import axios from 'axios'

function Freebook() {
  const [bookdb, setBookdb] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://localhost:4001/book");
        
        setBookdb(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []); 
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
  <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div>
       <h1 className='font-bold text-xl pb-2'>For you</h1>
       <p>
       Explore a vast collection of free books, offering endless stories, knowledge, and inspiration at your fingertips
       </p>
       </div>
    
    <div>
    <div className="slider-container mt-10">
      <Slider {...settings}>
       {bookdb.map((item)=>(
        <Carts item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
    </div>
  </>
  )
}

export default Freebook