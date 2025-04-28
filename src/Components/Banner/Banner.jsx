import React from 'react';
import bookImg from '../img/book.png'

const Banner = () => {
    return (
        <div className=' justify-around  hero bg-base-200 p-16 '>
             <div className='hero-content flex-col lg:flex-row-reverse'>
                <img  className="ml-90   max-w-xl rounded-lg shadow-2xl"  src={bookImg} alt="" />
            </div>
            <div>
                <h1 className="mr-160 text-5xl font-bold p-6"><span className='text-sky-500'>Books</span> to <br /> freshen up <br />your <span className='text-sky-500'>bookshelf</span></h1>
                <button className='btn btn-soft btn-info  ml-6'><a>View the List</a></button>
            </div>
           
        </div>
    );
};

export default Banner;