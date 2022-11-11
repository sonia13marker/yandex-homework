/*тут отображение страницы с выбором разделов и книгами из каждого раздела*/

import { Bookshelf } from '../../components/Bookshelf/Bookshelf.jsx';
import { useState } from 'react';
import styles from './BookshelfPage.css';
import { useSelector } from 'react-redux';
import { bookshelfs } from '../../constants/mock.js';
import {selectBookshelfs} from '../../store/cinema/selectors';
import { NavLink, Outlet, isActive  } from 'react-router-dom';

import classnames from 'classnames';


export const BookshelfPage = () => {

	const bookshelfs = useSelector((state) => selectBookshelfs(state));


	return <div className="bookshelf">
	
	{/*выбор жанра литературы*/}

	<div className="choice_genre">
		{
			bookshelfs.length > 0 &&  bookshelfs.map((bookshelf) =>  <NavLink to={bookshelf.id} key={bookshelf.id} className={({isActive}) => "genre"})>{bookshelf.name}
		</NavLink>
		}
	</div>

	{/*конец выбора*/}
	{/*{activeBookshelf &&	<Bookshelf bookshelf={activeBookshelf}/>}*/}
	<Outlet />

		
		
	</div>
}
