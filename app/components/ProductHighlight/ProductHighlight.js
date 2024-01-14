import style from './ProductHighlight.module.scss';

export default function ProductHighlight({ product }) {
    return (
        <div className={style.productHighlight}>
            <div className={style.productImg} style={{ backgroundImage: `url(${product.img})` }}></div>
            <h2><a href={product.href} target='_blank'>{product.name}</a></h2>
            <p>{product.blurb}</p>
        </div>
    )
}