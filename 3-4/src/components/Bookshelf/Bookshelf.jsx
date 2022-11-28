/*тут отображение одного раздела*/
import { Books } from "../Books/Books.jsx";
import { useSelector } from "react-redux";
import { selectBookshelfs } from "../../store/cinema/selectors.js";

export const Bookshelf = ({currentBookshelfId}) => {
  const bookshelfs = useSelector(selectBookshelfs);
  const bookshelf = bookshelfs.find((b) => b.id === currentBookshelfId);
  if (!bookshelf) {
    return <p>Not found.</p>;
  }

  return (
    <div>
      <Books bookshelfId={bookshelf.id} />
    </div>
  );
};




