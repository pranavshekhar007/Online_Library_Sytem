import { useState } from "react";
import "./style.css";

function Search(props) {
  const [searchText, setSearchText] = useState("");

  function handleSearch() {
    //Filter books by Title or Author
    const filteredBooks = props.booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
    );

    // Pass filtered books back to BookList
    props.filterFunction(filteredBooks);
  }

  return (
    <div className="search">
      <h2 className="search-heading">🔍 Search Books</h2>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by title or author..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Search;
