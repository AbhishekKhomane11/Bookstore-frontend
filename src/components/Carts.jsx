import React from 'react'

function Carts({ item }) {
    console.log(item);
    return (
        <>
           
                <div className="card image-full w-60 h-80 shadow-xl mb-10 mt-5 hover:scale-105 duration-200 m-20 dark:bg-slate-900 dark:text-white dark:border-white">
                    <figure>
                        <img className="w-full h-full object-cover"
                            src={item.image}
                            alt="" 
                           />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between mt-auto">
                            <div className='badge badge-outline w-20 h-10'>₹{item.price}</div>
                            <button className="cursor-pointer px-2 py-2 rounded-full border-black bg-orange-500 text-white hover:bg-blue-500">Buy Now</button>
                        </div>
                    </div>
                </div>
            
        </>

    )
}

export default Carts