import { Book } from '../../components/Book/Book';
import { Review } from "../../components/Review/Review.jsx";
import { useState } from "react";
import styles from "./ReviewsPage.css";
import { useSelector } from "react-redux";
import { selectReviewsByBookId } from "../../store/reviews/selectors.js";
import { Bookshelf } from "../../components/Bookshelf/Bookshelf.jsx";
import { selectBookById } from "../../store/book/selectors";
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
        
<div className="book_card1 small">
<Book {...book}/>
</div>
     

        

        {/*отображение маленькой карточки-аннотации*/}
        <div className="book_card small">
         <p>{book.annotation}</p>
        </div>
      </section>
    </div>
  );
};


