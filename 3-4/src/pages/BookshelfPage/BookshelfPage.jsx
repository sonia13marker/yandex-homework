/*тут отображение страницы с выбором разделов и книгами из каждого раздела*/

import { Bookshelf } from '../../components/Bookshelf/Bookshelf.jsx';
import { useState } from 'react';
import styles from './BookshelfPage.css';
import { useSelector } from 'react-redux';
import { bookshelf } from '../../constants/mock.js';

import classnames from 'classnames';


export const BookshelfPage = (props) => {
	{/*let activeBookshelf = props.bookshelf[0];*/}
	const genres = useSelector(state => Object.keys(state.genre.entities));

	const [activeBookshelf, setActiveBookshelf] = useState(genres[0]);

	return <div className="bookshelf">
	
	{/*выбор жанра литературы*/}
	<div className="choice_genre">
		{
			// props.bookshelf.map((bookshelf) => <button key={bookshelf.id} onClick={() => setActiveBookshelf(bookshelf)}>{bookshelf.name}</button>)
			//не хочет работать жирность
			//{classnames(styles.tab, {[styles.activeTab] : activeBookshelf.id === bookshelf.id })}
			bookshelf.length > 0 &&  bookshelf.map((bookshelf) => <p className="genre" key={bookshelf.id} onClick={() => setActiveBookshelf(bookshelf)}>{bookshelf.name}</p>)
		}
	</div>

	{/*конец выбора*/}
	{activeBookshelf &&	<Bookshelf bookshelf={activeBookshelf}/>}
		
		
	</div>
}