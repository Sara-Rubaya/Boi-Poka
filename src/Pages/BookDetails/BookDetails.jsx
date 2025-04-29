import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../../Utilities/AddToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {author,bookName, tags,category, publisher
        , image, review, totalPages,} = singleBook;


        const handleMarkAsRead = id => {
            addToStoredDb(id);
        }


    return (
        <div className=' w-2/3 mx-auto bg-base-300 px-5 shadow-lg m-5' >
            <img className='w-50 pt-5 ' src={image} alt="" />
            <h1 className='font-bold text-5xl'>{bookName}</h1>
            <p className='badge    font-medium bg-pink-400'>{category}</p>
            <h5><span className='font-bold'>Author:</span>{author}</h5>
            <div className='flex  gap-10'><span className='font-bold'>Tags:</span> 
            {
                tags.map(tag => <button>{tag}</button>)
            }
            </div>
            <p><span className='font-bold'>Published By:</span> {publisher}</p>
            <p><span className='font-bold'>Review:</span> {review}</p>
            <p>{totalPages}</p>
            <div className='flex justify-center mt-5 mb-5'> 
            <button onClick={()=>handleMarkAsRead(id)} className="btn  btn-info w-1/2 m-2">Mark as Read</button>
            <button className="btn btn-soft btn-secondary m-2 w-1/2 ">Add to WishList</button>
            </div>
        </div>
    );
};

export default BookDetails;