/*структура страницы*/

import styles from './Layout.css'

export  const Layout = (props) => { 

	return <div>
		<header className="header"><h1 className="header__title">Магазин</h1><button className="button__cart"><img src={require('./shopping-cart.png')}/></button></header>
		<div>
			{ props.children }
		</div>
	</div>
}