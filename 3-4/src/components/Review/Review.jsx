/*тут отображение содержимого одного отзыва*/
import styles from './Review.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectReviewById } from '../../store/review/selectors.js';

export const Review = ({reviewId}) => {
	const dispatch = useDispatch()
	const review = useSelector(state => selectReviewById(state, reviewId));
	if (!review) {
		return null;
	}

	return <div className="review_card">
		<p className="review_title">{review.user.name} <span>Оценка: {review.rating}</span></p> 
		<p>{review.text}</p>
	</div>
}