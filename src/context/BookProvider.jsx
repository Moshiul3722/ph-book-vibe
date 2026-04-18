import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  // console.log(expectedBook);
  const handleMarkAsRead = (currentBook) => {
    // step-1: Store book id or book object
    // step-2: where to store
    // step-3: array or collection
    // step-4: if the book is already exist then show a alert or toast
    // step-5: if not the book in the array or collection
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.warn("The book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast(`${currentBook.bookName} added to list.`);
    }
    console.log(currentBook, storedBooks);
  };

  const handleWishList = (currentBook) => {
    const isExistInReadList = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.warn(`${currentBook.bookName} is already in read list`);
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.warn("The book is already added to wishlist");
    } else {
      setStoredBooks([...wishList, currentBook]);
      toast(`${currentBook.bookName} added to wishlist.`);
    }
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
