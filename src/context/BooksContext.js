import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (name) => {
    const resp = await axios.post("http://localhost:3001/books", { name });
    setBooks([...books, resp.data]);
  };

  const fetchBooks = async () => {
    const resp = await axios.get("http://localhost:3001/books");
    setBooks(resp.data);
  };

  const removeBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updates = books.filter((b) => b.id !== id);
    setBooks([...updates]);
  };

  const value = {
    books,
    addBook,
    fetchBooks,
    removeBook,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export default BooksContext;
export { BooksProvider };
