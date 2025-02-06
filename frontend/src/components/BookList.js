import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Bookstore</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
