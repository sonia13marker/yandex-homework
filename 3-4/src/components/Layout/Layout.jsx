/*структура страницы*/

import styles from './Layout.css';
import { Link } from 'react-router-dom';

export  const Layout = (props) => { 

	return <div>
		<header className="header">
			<Link to="/"><h1 className="header__title">Магазин</h1></Link>
			<Link to="bookshelfs">Bookshelfs</Link>
			<button className="button__cart"><img src={require('./shopping-cart.png')}/></button>
		</header>
		<div>
			{ props.children }
		</div>
	</div>
}