import React, { use } from 'react';
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // const data = use(bookPromise);
    // console.log(data);
    const {bookName, author, image, rating, category, tags, yearOfPublishing, publisher, bookId} = singleBook;
    return (
       <Link to={`/bookDetails/${bookId}`}>
             <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="p-10  bg-gray-100">
          <img  
            src={image}
            alt="Shoes"
            className="rounded-xl h-[350px]" />
        </figure>
        <div className="card-body items-center text-center">
            <div className='flex justify-center gap-10'>
            {
                tags.map(tag => <button>{tag}</button>)
            }
            </div>
          <h2 className="card-title">{bookName}</h2>
          <div className="badge badge-secondary">{yearOfPublishing}</div>
          <p>{author}</p>
          <p>Book by: {publisher}</p>
          
          <div className="card-actions">
            <button className="btn btn-soft btn-info w-full">Buy Now</button>
            <div className='card-actions justify-end ml-42 '>
            <div className='badge   badge-outline '>{category}</div>
            <div className='badge  badge-outline '>{rating}</div>
            <div class="rating rating-md rating-half">
  <input type="radio" name="rating-11" class="rating-hidden" />
  <input type="radio" name="rating-11" class="mask mask-star-2 mask-half-1 bg-yellow-400" aria-label="0.5 star" />
  <input type="radio" name="rating-11" class="mask mask-star-2 mask-half-2 bg-yellow-400" aria-label="1 star" />
  </div>
          </div>
            </div>
        </div>
      </div>
       </Link>
    );
};

export default Book;