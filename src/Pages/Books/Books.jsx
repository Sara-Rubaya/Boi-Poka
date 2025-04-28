import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() =>{
    //     fetch("bookData.json")
    //     .then(res => res.json())
    //     .the(data => {
    //         setAllBooks(data);
    //     })
    // },[])

    // const bookPromise = fetch('./bookData.json').then(res =>res.json())
    return (
        <div>
            <h1 className='text-3xl text-center p-6 font-bold text-sky-600'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-base-200'>
             {
                data.map((singleBook)=><Book key={singleBook.boodId} singleBook={singleBook}></Book>)
              }
             </div>
            </Suspense>
        </div>
    );
};

export default Books;