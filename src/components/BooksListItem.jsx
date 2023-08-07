import { useContext } from "react";
import BooksContext from "../context/BooksContext";

function BooksListItem({ book }) {
  const { removeBook } = useContext(BooksContext);
  const { id, name } = book;
  return (
    <div>
      ID: {id} - {name}
      <button onClick={() => removeBook(id)}>X</button>
    </div>
  );
}

export default BooksListItem;
