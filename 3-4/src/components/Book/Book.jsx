/*тут отображение каждой книги в одном разделе, которая есть в массиве*/
import styles from './Book.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBookById } from '../../store/book/selectors.js';

export const Book = ({bookId}) => {
	const book = useSelector(state => selectBookById(state, bookId))
	const [count, setCount] = useState(0); 

	if (!book) {
		return null;
	}

	return <div className="book_card">
		<div>
			<p className="book_title">{book.name}</p>
			<p className="book_text">{book.autors}</p>
			<p className="book_text">{book.genre}</p>
			<p className="book_text">Оценка: {book.rating}</p>
			{book.price  !== undefined ? <p className="book_price">{book.price}₽</p> : <p>Нет в наличии</p>}
		</div>

		<span>
		<button className="book__button" onClick={() => setCount(count - 1) } disabled={count === 0}>-</button> 
		<span className="button__text">{count}</span> 
		<button className="book__button" onClick={() => setCount(count + 1)}>+</button>
		</span>
	</div>
}