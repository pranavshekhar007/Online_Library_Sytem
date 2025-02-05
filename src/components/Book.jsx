import { Link } from "react-router-dom";
import "./style.css";

function Book(props) {
  return (
    <div className="book-card">
      <img
        src={props.bookDetails.coverImage}
        alt=""
        width="100px"
        height="100px"
        className="book-cover"
      />
      <div className="book-details">
        <h2 className="book-title">{props.bookDetails.title}</h2>
        <p className="book-author">{props.bookDetails.author}</p>
        <p className="book-description">{props.bookDetails.description}</p>
        <Link to={`/books/${props.bookDetails.id}`}>
          <button className="view-more">View More</button>
        </Link>
      </div>
    </div>
  );
}

export default Book;

