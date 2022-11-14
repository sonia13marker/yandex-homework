
import styles from './index.module.css'


export function Summary({data}){

    const total = Object.keys(data).reduce((price, count) =>  count * price);
    console.log({total})
    return(
        <div className={styles.main}>
            {data.map(book => (
                <p>{book.name} x {book.count}</p>
            ))}
            <p> Итого:  {total}</p> 
            
        </div>
    )
}
