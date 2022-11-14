import { Book } from 'components/Book/Book.jsx';
import { Review } from "../../components/Review/Review.jsx";
import { useState } from "react";
import styles from "./ReviewsPage.css";
import { useSelector } from "react-redux";
import { selectReviewsByBookId } from "../../store/reviews/selectors.js";
import { Bookshelf } from "../../components/Bookshelf/Bookshelf.jsx";
import { selectBookById } from "store/book/selectors.js";
import { NavLink, Outlet, isActive, useParams } from "react-router-dom";

export const ReviewsPage = () => {
  const { id: bookId } = useParams();

  // let activeBookshelf = props.bookshelf[0];
  // const [count, setCount] = useState(0);
  const book = useSelector(state => selectBookById(state,bookId))
  const reviews = useSelector((state) => selectReviewsByBookId(state,bookId));
  return (
    <div className="page__reviews">
      <span>
        {reviews.map((review,i) => (
          
            <Review key={i} {...review} />
        ))}
      </span>
      {/*отображение маленькой карточки*/}

      <section className="container">
        

       <Book {...book}/>

        

        {/*отображение маленькой карточки-аннотации*/}
        <div className="book_card1 small">
         <p>{book.description}</p>
        </div>
      </section>
    </div>
  );
};


// import { Review } from '../../components/Review/Review.jsx';
// import { useState } from 'react';
// import styles from './ReviewsPage.css';
// import { Book } from '../../components/Book/Book.jsx';
// import { useSelector } from 'react-redux';
// import { selectReview } from '../../store/review/selectors.js';
// import { Bookshelf } from '../../components/Bookshelf/Bookshelf.jsx';
// import { NavLink, Outlet, isActive  } from 'react-router-dom';


// export const ReviewsPage = () => {



// 	 // let activeBookshelf = props.bookshelf[0];
// 	 // const [count, setCount] = useState(0); 
// 	const reviews = useSelector((state) => selectReview(state));



// 	return <div className="page__reviews">
// 			<span>
// 				{
// 					reviews.map((review) => <NavLink to={review.id} key={review.id} className={({ isActive }) => 
//                       (isActive ? "lactive-class" : "not-active-class")}><Review review={review}/></NavLink>)
// 				}
// 			</span>
// 		{/*отображение маленькой карточки*/}

// <section className="container">


// <div className="book_card1 small">
// 	<Outlet />
// 	</div>

			


// 		{/*отображение маленькой карточки-аннотации*/}
// 			<div className="book_card1 small">
// 				{/*<div>
// 					<p className="book_text black"><span className="ann__title">Аннотация</span>{props.bookshelf[0].books[0].annotation}</p>
// 				</div>*/}
// 			</div>
// </section>
// 	</div>
// }
