import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Books } from "../utils/mockdata";

function BookDetails() {
    const params = useParams();
    const booksFromRedux = useSelector((state) => state.books.books);
    const allBooks = [...Books, ...booksFromRedux]; 
    const book = allBooks.find((book) => book.id == params.id);

    if (!book) {
        return <h1 className="text-2xl text-center">Book not found!</h1>;
    }

    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-4">{book.title}</h1>
            <div className="flex flex-col items-center p-6">
                <img src={book.coverImage} alt={book.title} className="w-60 h-80 object-cover rounded-lg mb-4"/>
                <h2 className="text-xl font-semibold"> <b>Author:</b> {book.author}</h2>
                <p className="text-gray-700 text-lg"><b>Description:</b> {book.description}</p>
                <h4><b>Pages:</b> {book.pages}</h4>
                <h4><b>Rating:</b> {book.rating}</h4>
                <Link to="/browsebook">
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300">
                        Back to Browse
                    </button>
                </Link>
            </div>
        </>
    );
}

export default BookDetails;
