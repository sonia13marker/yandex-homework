/*структура страницы*/

import styles from './Layout.css'

export  const Layout = (props) => { 

	return <div>
		<header className="header"><h1 className="header__title">Магазин</h1></header>
		<div>
			{ props.children }
		</div>
	</div>
}