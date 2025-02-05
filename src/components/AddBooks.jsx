import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/booksSlice';

function AddBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [pages, setPages] = useState('');
  const [rating, setRating] = useState('');
  const [coverImage, setCoverImage] = useState(''); 
  const [error, setError] = useState('');

  // Form validation
  const validateForm = () => {
    if (!title || !author || !description || !pages || !rating || !coverImage) {
      setError('All fields are required!');
      return false;
    }
    if (isNaN(pages) || isNaN(rating)) {
      setError('Pages and rating must be numeric.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Create a new book object
      const newBook = {
        id: Date.now(),
        title,
        author,
        description,
        pages,
        rating,
        coverImage, 
      };

      dispatch(addBook(newBook));

      navigate('/browsebook');
    }
  };

  return (
    <div className="add-book-form">
      <h1>Add a New Book</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Pages:</label>
          <input
            type="text"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div>
          <label>Cover Image URL:</label>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)} 
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBooks;
