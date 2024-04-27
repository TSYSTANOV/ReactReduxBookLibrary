import { useState } from "react";
import "./BookForm.css";
import { addBook } from "../redux/actionCreators";
import { useDispatch } from "react-redux";
import booksData from "../data/books.json";
import { createBookWithID } from "../utils/CreateBookWithID";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  function handleAddRandomBook() {
    const randomBook = booksData[Math.floor(Math.random() * booksData.length)];
    dispatch(addBook(createBookWithID(randomBook)));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title && author) {
      const book = {
        title,
        author,
      };
      dispatch(addBook(createBookWithID(book)));
      setTitle("");
      setAuthor("");
    }
  }
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  );
}
export { BookForm };
