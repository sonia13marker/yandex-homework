/*тут отображение всех возможных книг, присутсвующих в массиве, в одном разделе разделе*/

import { Book } from '../Book/Book.jsx';
import styles from './Books.css';

export const Books = ({books}) => {
	return <div className="books">
				{
					books.map((book) => <span key={book.id}><Book book={book}/></span>)
				}
		</div>
}