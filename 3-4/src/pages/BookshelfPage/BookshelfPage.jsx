import cn from "classnames";
/*тут отображение страницы с выбором разделов и книгами из каждого раздела*/
import styles from './BookshelfPage.css';
import { Books } from "../../components/Books/Books.jsx";
import { useState } from "react";
import { genres } from '../../constants/genres';

export const BookshelfPage = () => {
  const [currentGenre, setCurrentGenre] = useState(genres[0]);
  {
    /*выбор жанра литературы*/
  }
  console.log(currentGenre);
  return (
    <div className="bookshelf_container">
      <div className="bookshelf">
        <div className="choice_genre">
          {genres.map((genre, i) => (
            <p
              key={i}
              className={cn("genre", { genre_bold: currentGenre === genre })}
              onClick={() => setCurrentGenre(genre)}
            >
              {genre}
            </p>
          ))}
        </div>
      </div>

      <Books genre={currentGenre} />
    </div>
  );
};


