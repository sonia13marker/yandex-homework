/*тут отображение структуры и страницы с книгами, потом и страницы с отзывами на книгу.*/

import { Layout } from './components/Layout/Layout.jsx';
import { BookshelfPage } from './pages/BookshelfPage/BookshelfPage.jsx';
import { bookshelf } from './constants/mock.js';
import { ReviewsPage } from './pages/ReviewsPage/ReviewsPage.jsx';
import {Provider} from 'react-redux';
import {store} from './store';

export function App() {
	return (<Provider store={store}> 
		<Layout>

	{/*отображение страницы с жанрами и книгами выбранного жанра*/}
	<BookshelfPage  />

	{/*отображение страницы с выбранной книгой, отзывами и аннотацией
	<ReviewsPage bookshelf={bookshelf} />*/}

	</Layout>
	</Provider>
	);
}