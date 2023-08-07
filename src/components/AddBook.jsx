import { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";

function AddBook() {
  const { addBook } = useContext(BooksContext);
  const [inputText, setInputText] = useState();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(inputText);
    setInputText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter book name</label>
      <input type='text' onChange={handleChange} />
      <button type='submit'>ADD</button>
    </form>
  );
}

export default AddBook;
