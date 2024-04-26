import "./BookList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBook } from "./redux/actionCreators";
function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  function deleteHandler(id) {
    dispatch(deleteBook(id));
  }
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No Books available</p>
      ) : (
        <ul>
          {books.map((book, index) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {index + 1}. {book.title} by <strong>{book.author}</strong>
                </div>
                <button
                  className="book-actions"
                  onClick={() => {
                    deleteHandler(book.id, book.title);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export { BookList };
