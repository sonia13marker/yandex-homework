import cn from "classnames";
/*тут отображение страницы с выбором разделов и книгами из каждого раздела*/

import { Books } from "../../components/Books/Books.jsx";
import { useState } from "react";
import styles from "./BookshelfPage.css";
import { useSelector } from "react-redux";
import { selectBookshelfs } from "../../store/cinema/selectors";
import { NavLink, Outlet, isActive } from "react-router-dom";
import { genres } from "../constants/genres";
import classnames from "classnames";

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

        {/*конец выбора*/}
        {/*{activeBookshelf &&	<Bookshelf bookshelf={activeBookshelf}/>}*/}
        {/* <Outlet /> */}
      </div>

      <Books genre={currentGenre} />
    </div>
  );
};



// /*тут отображение страницы с выбором разделов и книгами из каждого раздела*/

// import { Bookshelf } from '../../components/Bookshelf/Bookshelf.jsx';
// import { useState } from 'react';
// import styles from './BookshelfPage.css';
// import { useSelector } from 'react-redux';
// import { bookshelfs } from '../../constants/mock.js';
// import {selectBookshelfs} from '../../store/cinema/selectors';
// import { NavLink, Outlet, isActive  } from 'react-router-dom';

// import classnames from 'classnames';


// export const BookshelfPage = () => {

// 	const bookshelfs = useSelector((state) => selectBookshelfs(state));

// {/*выбор жанра литературы*/}

// 	return <div className="bookshelf"> 

// 	<div className="choice_genre"> {
		
// 		bookshelfs.length > 0 &&  bookshelfs.map((bookshelf) =>  <NavLink to={bookshelf.id} key={bookshelf.id} className={({ isActive }) => 
//         (isActive ? {fontWeight: '400'} : {fontWeight: '600'})} className="genre">{bookshelf.name} </NavLink>)
// 	}
		
// 	</div>

// 	{/*конец выбора*/}
// 	{/*{activeBookshelf &&	<Bookshelf bookshelf={activeBookshelf}/>}*/}
// 	<Outlet />

		
		
// 	</div>
// }
