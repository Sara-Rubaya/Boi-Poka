import React, { use } from 'react';

const Book = ({singleBook}) => {
    // const data = use(bookPromise);
    // console.log(data);
    const {bookName, author, image} = singleBook;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="p-10  bg-gray-100">
          <img  
            src={image}
            alt="Shoes"
            className="rounded-xl h-[350px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions">
            <button className="btn btn-soft btn-info">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Book;