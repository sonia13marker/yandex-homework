/*тут отображение содержимого одного отзыва*/
import styles from './Review.css';

export const Review = ({review}) => {
	return <div className="review_card">
		<p className="review_title">{review.user.name} <span>Оценка: {review.rating}</span></p> 
		<p>{review.text}</p>
	</div>
}