import { useContext } from "react";
import BooksListItem from "./BooksListItem";
import BooksContext from "../context/BooksContext";

function BooksList() {
  const { books } = useContext(BooksContext);
  return (
    <div>
      {books.map((book) => (
        <BooksListItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BooksList;
