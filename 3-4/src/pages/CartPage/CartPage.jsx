import { Summary } from '../../components/Summary'
import {useSelector} from 'react-redux'
import { selectCartModule } from '../../store/cart/selectors'
import {selectBooks} from '../../store/book/selectors';
import {Book} from '../../components/Book/Book';
import styles from './CartPage.css';

export const CartPage = () => {
    const cart = useSelector(selectCartModule)
    const books = useSelector(selectBooks);
    // console.log(books)
    const dataToRender = Object.entries(cart).map(prop => {
        const book = books.find(b => b.id === Number(prop[0]));
        return {...book,count:prop[1]}
    })
    console.log(dataToRender)
    // console.log({Book})
    if(Object.values(cart).length === 0) return <div className='warning'> <p >В корзину ничего не добавлено.</p></div>
	return(
        <section className='container1'>
            <Summary data={dataToRender}/>
        <span className='long_container'>
             {/*отображение карточек книг в корзине*/}
             {dataToRender.map(book => (<Book {...book}/>))} 
        </span>
           
            
        </section>
       
    )

}
