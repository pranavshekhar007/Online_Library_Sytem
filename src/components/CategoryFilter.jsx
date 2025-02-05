import { Link } from "react-router-dom";

function CategoryFilter() {
  return (
    <div className="category-filter text-center mt-8">
      <h2 className="text-2xl font-semibold">Filter by Category:</h2>
      <div className="category-links mt-4">
        <Link to="/books/category/fiction" className=" category-btn mr-4 text-blue-500 hover:underline">
          Fiction
        </Link>
        <Link to="/books/category/non_fiction" className=" category-btn  mr-4 text-blue-500 hover:underline">
          Non-fiction
        </Link>
        <Link to="/books/category/science" className="category-btn  mr-4 text-blue-500 hover:underline">
          Science
        </Link>
        <Link to="/books/category/history" className="category-btn  mr-4 text-blue-500 hover:underline">
          History
        </Link>
      </div>
    </div>
  );
}

export default CategoryFilter;
