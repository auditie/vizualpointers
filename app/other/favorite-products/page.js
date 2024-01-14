import style from './favoriteproducts.module.scss';

import SlimHero from '@/app/components/SlimHero/SlimHero';
import ProductHighlight from '@/app/components/ProductHighlight/ProductHighlight';

import { products } from '@/app/data/products';

export default function FavoriteProducts() {
    return (
        <div id={style.productPage}>
            <SlimHero />
            <h1>favorite products</h1>
            <div className={style.productsGrid}>
                {
                    products.map((product) => (
                        <ProductHighlight key={product.href} product={product} />
                    ))
                }
            </div>
        </div>
    )
}