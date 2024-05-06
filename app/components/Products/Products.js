import style from './products.module.scss';

import products from '@/app/data/products';

export default function Products() {
    return (
        <div id={style.products}>
            <div className={style.productsContainer}>
                <div className={style.leftCol}>
                    <h3>FAVORITE PRODUCTS</h3>
                    {/* <p>These are our favorite tried and tested products! </p> */}
                </div>
                <div className={style.rightCol}>
                    {products.map((product) => (
                        <div className={style.product} key={product.id}>
                            <h4>{product.name}</h4>
                            <p>{product.blurb}</p>
                            <p className={style.productCode}>{product.code}</p>
                            <a href={product.href} target="_blank">LINK</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}