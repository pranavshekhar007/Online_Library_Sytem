import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Books } from "../utils/mockdata";
import Search from "./Search"; 
import CategoryFilter from "./CategoryFilter";

function BrowseBook() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  console.log("Category from URL:", decodedCategory);
  const booksFromStore = useSelector((state) => state.books.books);

  // Combine Books from mock data and Redux store
  const allBooks = [...Books, ...booksFromStore];

  // State for the filtered books
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (category) {
      const formattedCategory = category.replace("-", " ").toLowerCase();
      const filteredData = allBooks.filter(
        (book) => book.category.toLowerCase() === formattedCategory
      );
      setFilteredBooks(filteredData);
    } else {
      setFilteredBooks(allBooks);
    }
  }, [category, booksFromStore]);

  // Filter function for search component
  const filterBooks = (filteredData) => {
    setFilteredBooks(filteredData);
  };

  return (
    <>
      {/* Category Filter Component */}
      <CategoryFilter />

      {/* Search Component */}
      <Search booksData={allBooks} filterFunction={filterBooks} />

      <h1 className="text-4xl font-bold text-center mt-8 mb-4">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Books` : "All Books"}
      </h1>

      {/* Book Grid */}
      <div className="bookList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover w-full h-60 object-cover rounded-md mb-4"
              />
              <div className="book-details">
                <h2 className="book-title text-xl font-semibold mb-2">{book.title}</h2>
                <p className="book-author text-sm text-gray-600 mb-2">{book.author}</p>
                <p className="book-description text-gray-700 mb-4">{book.description}</p>
                <p className="book-category text-gray-500">{book.category}</p>
                <Link
                  to={`/books/${book.id}`} 
                  className="view-more bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
                >
                  View More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results text-center text-xl text-gray-600">No books found.</p>
        )}
      </div>
    </>
  );
}

export default BrowseBook;
