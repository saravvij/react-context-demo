import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import { BooksProvider } from "./context/BooksContext";

function App() {
  return (
    <BooksProvider>
      <AddBook />
      <BooksList />
    </BooksProvider>
  );
}

export default App;
