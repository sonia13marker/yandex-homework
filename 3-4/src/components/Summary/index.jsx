import styles from './Summary.css';

export function Summary({data}){

    let sum = 0;
    
    return(
        <section className="main">
            <span className="span_text">Ваш заказ:</span>
            {data.map(book => (
                <p> {book.name} x {book.count}, {book.count * book.price}</p>
            ))
             }
             <span className="span_text end"> Итого: { data.map(book=> book.price * book.count).reduce((prev,cur) => prev+cur,0)}</span>
           
               
            
            
        </section>
    )
}
