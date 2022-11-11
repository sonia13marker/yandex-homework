/*тут отображение всех возможных отзывов на оdну книгу*/

import { Review } from '../Review/Review.jsx';

export const Reviews = (props) => {
	let activeBookshelf = props.bookshelfs[0];

	return <div>
 			{/*<h3>Reviews</h3>
 			<div>
 				{
 					activeBookshelf.reviews.map((review) => <span key={review.id}><Review review={review}/></span>)
 				}
 			</div>*/}



 			{/*{<Review review={bookshelf.reviews}/>}*/}
 			{/*<ul>
				{
					activeBookshelf.reviews.map((review) => <li key={review.id}><Review review={review}/></li>)
 				}
 			</ul>*/}
 		</div>
 }


 // export const Books = ({books}) => {
	// return <div className="books">
	// 			{
	// 				books.map((book) => <span key={book.id}><Book book={book}/></span>)
	// 			}
	// 	</div>