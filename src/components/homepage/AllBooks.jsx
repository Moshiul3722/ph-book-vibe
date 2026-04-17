import React, { use } from "react";

import BookCard from "../UI/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div className="container mx-auto">
      <h3 className="text-center font-bold text-[40px]">Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {books.map((book, index) => {
          return <BookCard key={index} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
