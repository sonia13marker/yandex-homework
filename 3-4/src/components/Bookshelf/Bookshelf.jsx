/*тут отображение одного раздела*/
import { Books } from '../Books/Books.jsx';
import { Reviews } from '../Reviews/Reviews.jsx';
import { bookshelfs } from '../../constants/mock';
	//было books & bookshelf.books

export const Bookshelf = ({bookshelf}) => {
	return <div>

		<Books bookshelfId={bookshelf.id}/>
		{/*<Reviews reviews={bookshelf.reviews}/>*/}
	</div>
	
}
console.log(bookshelfs[0].genres);