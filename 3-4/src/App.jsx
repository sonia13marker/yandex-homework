/*тут отображение структуры и страницы с книгами, потом и страницы с отзывами на книгу.*/

import { Layout } from './components/Layout/Layout.jsx';
import { BookshelfPage } from './pages/BookshelfPage/BookshelfPage.jsx';
import { bookshelf } from './constants/mock.js';
import { ReviewsPage } from './pages/ReviewsPage/ReviewsPage.jsx';

export function App() {
	return <Layout>

	{/*отображение страницы с жанрами и книгами выбранного жанра
	<BookshelfPage bookshelf={bookshelf} />*/}

	{/*отображение страницы с выбранной книгой, отзывами и аннотацией*/}
	<ReviewsPage bookshelf={bookshelf} />

	</Layout>
	}