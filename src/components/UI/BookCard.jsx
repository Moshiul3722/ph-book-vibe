import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 w-96 shadow-sm"
    >
      <figure className="p-6">
        <img src={book.image} alt="Shoes" className="rounded-xl h-62.5" />
      </figure>
      <div className="card-body">
        <div className="gap-3 flex">
          {book.tags.map((tag, index) => {
            return (
              <div key={index} className="badge badge-secondary">
                {tag}
              </div>
            );
          })}
        </div>
        <h2 className="card-title font-bold">{book.bookName}</h2>
        <p>By: {book.author}</p>
        <div className="card-actions justify-between">
          <div className="">{book.category}</div>
          <div className="">
            {book.rating}
            <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
