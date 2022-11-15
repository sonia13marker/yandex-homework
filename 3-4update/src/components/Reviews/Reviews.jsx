/*тут отображение всех возможных отзывов на оdну книгу*/

import { Review } from '../Review/Review.jsx';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/cinema/selectors.js';

export const Reviews = ({reviewId}) => {
	// let activeBookshelf = props.bookshelfs[0];
	const reviewIds = useSelector(state => selectReviewById(state, reviewId));
	// const { reviewId } = useParams();
	// const review = useSelector(state => selectReviewById(state, reviewId));

	if (!reviewIds) {
		return null;
	}

	return <div>
		{
			reviewIds.map((id) => <span key={id}><Review reviewId={id}/></span>)
				
				}

 			
 		</div>
 }




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
 

 // export const Books = ({books}) => {
	// return <div className="books">
	// 			{
	// 				books.map((book) => <span key={book.id}><Book book={book}/></span>)
	// 			}
	// 	</div>

