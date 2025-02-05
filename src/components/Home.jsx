import { Link } from "react-router-dom";
import "./homeStyle.css";

function Home() {
  return (
    <div className="home min-h-screen bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 flex flex-col items-center justify-center text-white p-8">
      {/* Welcome Section */}
      <h1 className="home__title text-4xl font-extrabold text-center mb-4 animate-fade-in">
        📚 Welcome to Online Library
      </h1>
      <p className="home__description text-lg text-white-200 mt-4 max-w-lg text-center">
        Explore and manage a vast collection of books across various genres.
      </p>

      {/* Categories Section */}
      <div className="home__categories mt-12 w-full max-w-2xl">
        <h2 className="home__category-title text-3xl font-semibold text-white text-center mb-6">📂 Categories</h2>
        <div className="category-links flex justify-center gap-6">
          <Link
            to="/books/category/fiction"
            className="home__category-card"
          >
            <div className="category-card-content">
              <h3 className="home__category-name">Fiction</h3>
            </div>
          </Link>
          <Link
            to="/books/category/non_fiction"
            className="home__category-card"
          >
            <div className="category-card-content">
              <h3 className="home__category-name">Non-fiction</h3>
            </div>
          </Link>
          <Link
            to="/books/category/science"
            className="home__category-card"
          >
            <div className="category-card-content">
              <h3 className="home__category-name">Science</h3>
            </div>
          </Link>
          <Link
            to="/books/category/history"
            className="home__category-card"
          >
            <div className="category-card-content">
              <h3 className="home__category-name">History</h3>
            </div>
          </Link>
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="home__popular-books mt-12 w-full max-w-2xl">
        <h2 className="home__popular-books-title text-3xl font-semibold text-white text-center mb-6">🔥 Popular Books</h2>
        <div className="popular-books-list flex  justify-center gap-6">
          <div className="book-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg" alt="War and Peace" className="book-cover" />
            <div className="book-details">
              <h3 className="book-title">📖 War and Peace</h3>
              <p className="book-author">Leo Tolstoy</p>
              <Link to="/books/1">
                <button className="view-more">View More</button>
              </Link>
            </div>
          </div>
          <div className="book-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/800px-Moby-Dick_FE_title_page.jpg" alt="Moby Dick" className="book-cover" />
            <div className="book-details">
              <h3 className="book-title">📖 Moby-Dick</h3>
              <p className="book-author">Herman Melville</p>
              <Link to="/books/9">
                <button className="view-more">View More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
