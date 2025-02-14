import { Link } from "react-router-dom";
import "./homeStyle.css";

function Home() {
  return (
    <div className="home min-h-screen bg-cover bg-center bg-fixed relative flex flex-col items-center justify-center text-white" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')" }}
    >
      {/* Overlay for Faded Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Welcome Section */}
        <h1 className="home__title text-4xl text-gray-300 font-extrabold mb-4 animate-fade-in">
          📚 Welcome to Online Library
        </h1>
        <p className="home__description text-lg mt-4">
          Explore and manage a vast collection of books across various genres.
        </p>

        {/* Categories Section */}
        <div className="home__categories mt-12 w-full max-w-2xl">
          <h2 className="home__category-title text-3xl font-semibold mb-6">📂 Categories</h2>
          <div className="category-links flex justify-center gap-6">
            <Link to="/books/category/fiction" className="home__category-card">
              <div className="category-card-content">
                <h3 className="home__category-name">Fiction</h3>
              </div>
            </Link>
            <Link to="/books/category/non_fiction" className="home__category-card">
              <div className="category-card-content">
                <h3 className="home__category-name">Non-fiction</h3>
              </div>
            </Link>
            <Link to="/books/category/science" className="home__category-card">
              <div className="category-card-content">
                <h3 className="home__category-name">Science</h3>
              </div>
            </Link>
            <Link to="/books/category/history" className="home__category-card">
              <div className="category-card-content">
                <h3 className="home__category-name">History</h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Popular Books Section */}
        <div className="home__popular-books mt-12 w-full max-w-2xl">
          <h2 className="home__popular-books-title text-3xl font-semibold mb-6">🔥 Popular Books</h2>
          <div className="popular-books-list flex justify-center gap-6">
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
    </div>
  );
}

export default Home;
