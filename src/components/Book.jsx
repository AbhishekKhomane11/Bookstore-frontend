import React, { useState, useEffect } from 'react'
//import list from '../../public/list.json'
import Carts from '../components/Carts'
import axios from 'axios'
function Book() {
  const [bookdb, setBookdb] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBookdb(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);


  return (
    <>
    
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          bookdb.map((item)=>(
            <Carts key={item.id} item={item} />
          )
          )
        }
      </div>
    
    </>
  )
}
export default Book