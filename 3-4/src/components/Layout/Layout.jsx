/*структура страницы*/

import styles from './Layout.css';
import { Link } from 'react-router-dom';
import {BookshelfPage} from '../../pages/BookshelfPage/BookshelfPage.jsx';

export  const Layout = (props) => { 

	return <div>
		<header className="header">
			<Link to="/"><h1 className="header__title">Магазин</h1></Link>
			<Link to="/bookshelf">
				{
					<BookshelfPage/>
				}
			</Link>
			<Link to="/cart">
			<button className="button__cart"><img src={require('./shopping-cart.png')}/></button>
			</Link>
		</header>
		<div>
			{ props.children }
		</div>
	</div>
}