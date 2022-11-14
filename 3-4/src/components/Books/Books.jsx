/*тут отображение всех возможных книг, присутсвующих в массиве, в одном разделе разделе*/

import { Book } from "../Book/Book.jsx";
import styles from "./Books.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBooksByGenre } from "../../store/book/selectors";

export const Books = ({ genre }) => {
  // const books = useSelector(state => selectBooks(state));
  const books = useSelector((state) => selectBooksByGenre(state, genre));
  console.log(books)
  if (!books) {
    return null;
  }

  return (
    <div className="books">
      {books.map((book) => (
        <span key={book.id}>
          <Book {...book} />
        </span>
      ))}
    </div>
  );
};



// /*тут отображение всех возможных книг, присутсвующих в массиве, в одном разделе разделе*/

// import { Book } from '../Book/Book.jsx';
// import styles from './Books.css';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectBooks, selectIsBooksLoading } from '../../store/book/selectors.js';
// import { selectBookshelfsBookIds } from '../../store/cinema/selectors';

// export const Books = ({bookshelfId}) => {

// 	// const books = useSelector(state => selectBooks(state));
// 	const bookIds = useSelector(state => selectBookshelfsBookIds(state, bookshelfId));
// 	const isLoading = useSelector(state => selectIsBooksLoading(state));

// 	if (isLoading) {
// 		return <p>Подождите, список товаров загружается</p>;
// 	}

// 	if (!bookIds) {
// 		return null;
// 	}

// 	return <div className="books">
// 				{
// 					bookIds.map((id) => <span key={id}><Book bookId={id}/></span>)
				
// 				}
// 		</div>
// }