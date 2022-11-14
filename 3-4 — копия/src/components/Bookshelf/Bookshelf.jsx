/*тут отображение одного раздела*/
import { Books } from '../Books/Books.jsx';
import { Reviews } from '../Reviews/Reviews.jsx';
import { bookshelfs } from '../../constants/mock';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBookshelfById } from '../../store/cinema/selectors.js';
import { Outlet } from "react-router-dom";

	//было books & bookshelf.books

export const Bookshelf = () => {
	const { bookshelfId } = useParams();
	const bookshelf = useSelector(state => selectBookshelfById(state, bookshelfId));

	if (!bookshelf) {
		return null;
	}

	return <div>

		<Books bookshelfId={bookshelf.id}/>
		{/*<Reviews reviews={bookshelf.reviews}/>*/}
		<Outlet />
	</div>
	
}
