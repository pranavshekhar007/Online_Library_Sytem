import { useState } from "react";
import Book from "./Book";
import "./style.css";
import Search from "./Search";

function BookList(props) {
  const [filteredBooks, setFilteredBooks] = useState(props.BooksData);

  function filterSearchList(filteredSearchBooks) {
    setFilteredBooks(filteredSearchBooks);
  }

  return (
    <div className="bookList-container">
      {/* Search Component */}
      <Search booksData={props.BooksData} filterFunction={filterSearchList} />

      {/* Display Filtered Books */}
      <div className="bookList">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <Book key={book.id} bookDetails={book} />)
        ) : (
          <p className="no-results">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BookList;
