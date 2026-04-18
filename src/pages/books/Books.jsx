import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const Books = () => {
  const { storedBooks, setStoredBooks } = useContext(BookContext);
  console.log(storedBooks, "BookContext");
  return (
    <div>
      <h3>Books</h3>
    </div>
  );
};

export default Books;
