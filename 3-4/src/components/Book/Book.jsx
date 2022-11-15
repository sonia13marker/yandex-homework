/*тут отображение каждой книги в одном разделе, которая есть в массиве*/
import styles from './Book.css'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectBookCount } from '../../store/cart/selectors.js';
import { cartSlice } from '../../store/cart';

export const Book = ({id,name,genre,author,rating,price, data}) => {
	
	const dispatch = useDispatch()
	const count = useSelector(state => selectBookCount(state, id));
	return <div className="book_card">
		<Link to={`/reviews/${id}`}><div>
			<p className="book_title">{name}</p>
			<p className="book_text">{author}</p>
			<p className="book_text">{genre}</p>
			<p className="book_text">Оценка: {rating}</p>
			<p className="book_price">{price}₽</p>
		</div></Link>

		<span>
		<button className="book__button" onClick={() => dispatch(cartSlice.actions.removeBook(id)) } disabled={count === 0}>-</button> 
		<span className="button__text">{count || 0}</span> 
		<button className="book__button" onClick={() => dispatch(cartSlice.actions.addBook(id))}>+</button>
		</span>
	</div>
}
