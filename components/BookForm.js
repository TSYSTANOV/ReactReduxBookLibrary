import { useState } from "react";
import "./BookForm.css";
import { store } from "./redux/store";
import { addBook } from "./redux/actionCreators";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (title && author) {
      const book = {
        title,
        author,
        id: uuidv4(),
        favorite: false,
      };
      dispatch(addBook(book));

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
      </form>
    </div>
  );
}
export { BookForm };
