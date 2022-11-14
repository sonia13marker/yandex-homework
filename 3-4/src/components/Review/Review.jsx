/*тут отображение содержимого одного отзыва*/
import styles from './Review.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectReviewById } from '../../store/reviews/selectors.js';

export const Review = ({name,rate,text}) => {
	// const dispatch = useDispatch()

	return <div className="review_card">
		<p className="review_title">{name} <span>Оценка: {rate}</span></p> 
		<p>{text}</p>
	</div>
}


// /*тут отображение содержимого одного отзыва*/
// import styles from './Review.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectReviewById } from '../../store/review/selectors.js';

// export const Review = ({reviewId}) => {
// 	const dispatch = useDispatch()
// 	const review = useSelector(state => selectReviewById(state, reviewId));
// 	if (!review) {
// 		return null;
// 	}

// 	return <div className="review_card">
// 		<p className="review_title">{review.user.name} <span>Оценка: {review.rating}</span></p> 
// 		<p>{review.text}</p>
// 	</div>
// }