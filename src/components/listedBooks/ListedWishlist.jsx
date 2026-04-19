import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../UI/BookCard";

const ListedWishlist = () => {
  const { wishList } = useContext(BookContext);
  console.log(wishList, "bookContext");

  if (wishList.length === 0) {
    return (
      <div className="h-100 bg-gray-200 flex items-center justify-center rounded-2xl">
        <h2 className="font-bold text-3xl">No wish list data found.</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3">
      {wishList.map((book, index) => (
        <BookCard key={index} book={book}></BookCard>
      ))}
    </div>
  );
};

export default ListedWishlist;
