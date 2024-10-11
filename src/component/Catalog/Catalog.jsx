

import { products } from '../../assets/data'
import { Card } from '../Card/Card'
import { Filtr } from '../Filtr/Filtr'
import { Header } from '../Header/Header'
import s from './Catalog.module.css'


export function Catalog() {
    return (
        <>
            <div className="container">
                <h2>Каталог товаров</h2>
                <Filtr></Filtr>
                <div className={s.cards}>
                    {
                        products.map((product)=>{
                            return(
                                <Card id={product.id} image={product.image} title={product.title} price={product.price}></Card>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}