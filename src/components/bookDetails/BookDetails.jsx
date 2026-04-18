import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const expectedBook = books.find((book) => book.bookId == bookId);

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);
  // console.log(bookContext, "BookContext");

  return (
    <div className="container mx-auto mt-8">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={expectedBook.image} alt="Album" className="h-125" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-success"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleWishList(expectedBook)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
