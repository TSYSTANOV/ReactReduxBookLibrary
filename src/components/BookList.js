import "./BookList.css";
import { useSelector, useDispatch } from "react-redux";
import { addFavotite, deleteBook } from "../redux/actionCreators";
import { BsBookmarkStar } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  function handleFavorite(id){
    dispatch(addFavotite(id))
  }
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
                <div className="book-actions">
                  <span onClick={()=>{
                  handleFavorite(book.id)
                }}>
                  {book.favorite ? <BsBookmarkStarFill className="star-icon"/>:<BsBookmarkStar className="star-icon"/>}
                  </span>
                <button
                  onClick={() => {
                    deleteHandler(book.id);
                  }}
                >
                  Delete
                </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export { BookList };
