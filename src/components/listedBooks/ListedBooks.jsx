import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../UI/BookCard";

const ListedBooks = ({ sortingType }) => {
  const { storedBooks } = useContext(BookContext);
  //   console.log(storedBooks, "bookContext");
  const [filteredReadList, setFilteredReadList] = useState(storedBooks);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...storedBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredReadList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, storedBooks]);

  if (filteredReadList.length === 0) {
    return (
      <div className="h-100 bg-gray-200 flex items-center justify-center rounded-2xl">
        <h2 className="font-bold text-3xl">No read list data found.</h2>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3">
      {filteredReadList.map((book, index) => (
        <BookCard key={index} book={book}></BookCard>
      ))}
    </div>
  );
};

export default ListedBooks;
