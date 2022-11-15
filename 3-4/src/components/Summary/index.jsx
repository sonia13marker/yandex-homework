
import styles from './index.module.css'


export function Summary({data}){

    let sum = 0;
    
    return(
        <div className={styles.main}>
            <span className={styles.span_zak}>Ваш заказ:</span>
            {data.map(book => (
                <p> 
                    {book.name} x {book.count}, {book.price * book.count}
                    
                        {/* sum = {} */}
                        
                </p>
            ))
         
             }
             <div>
                {/* {
                    data.reduce((book) => ( 
                        <p>{book.price * book.count} + sum</p>
                    ))
                } */}
             </div>
                <p className={styles.ed}> Итого:</p>
            
            
        </div>
    )
}
