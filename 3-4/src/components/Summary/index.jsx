import styles from './Summary.css';

export function Summary({data}){

    let sum = 0;
    
    return(
        <section className="main">
            <span className="span_text">Ваш заказ:</span>
            {data.map(book => (
                <p> {book.name} x {book.count}, <span className='bold'>{book.count * book.price} ₽</span></p>
            ))
             }
             <span className="span_text end"> Итого: { data.map(book=> book.price * book.count).reduce((prev,cur) => prev+cur,0)} ₽
             <button className='butt'>Купить</button></span>
           
               
            
            
        </section>
    )
}
