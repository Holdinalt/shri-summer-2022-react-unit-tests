import bouquetHeightIco from "../assets/bouquetHeightIcon.svg"
import bouquetWidthIco from "../assets/bouquetWidthIcon.svg"
import bouquetFlowersCountIco from "../assets/flowersCountIcon.svg"
import emptyFavoriteIco from "../assets/emptyFavoriteIcon.svg"
import fillFavoriteIco from "../assets/fillHeartIcon.svg"
import styles from "./ProductCard.module.scss"

export const ProductCard = ({
                                bouquetHeight,
                                bouquetWidth,
                                currentPrice,
                                flowersCount,
                                id,
                                imageUrl,
                                isFavorite,
                                isHit,
                                isSale,
                                oldPrice,
                                title,
                            }) => {

    function formatPrice(price){
        let outStr = ''

        for(let i = price.length - 1; i >= 0; i--){
            outStr = price[i] + outStr

            if(i % 3 === 2 && i !== 0){
                outStr = ' ' + outStr
            }
        }

        return outStr
    }

    // Реализуйте компонент
    return (
        <div data-testid="product-card" className={styles.card}>
            <div>
                <div className={styles.productImage} style={{background: `url(${imageUrl})`}}>
                    <div className={styles.content}>
                        <div className={styles.stickers}>
                            {isHit && <div className={styles.hitSticker}><span>Хит</span></div>}
                            {isSale && <div className={styles.saleSticker}><span>Скидка</span></div>}
                        </div>
                        {isFavorite
                            ?
                            <>
                                <img src={fillFavoriteIco} alt={'Любимый'}/>
                            </>

                            :
                            <>
                                <img src={emptyFavoriteIco} alt={'Сделать любимым'}/>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.productInfo}>
                <span>{flowersCount} {title}</span>
                <div className={styles.price}>
                    {oldPrice
                        ?
                        <>
                            <span className={styles.currentHighlighted}>{formatPrice(currentPrice)} ₽</span>
                            <span className={styles.old}>{formatPrice(oldPrice)} ₽</span>
                        </>

                        :
                        <>
                            <span>{formatPrice(currentPrice)} ₽</span>
                        </>
                    }
                </div>
                <div className={styles.productMetrics}>
                    <div>
                        <img src={bouquetFlowersCountIco} alt={'Кол-во цветов'}/>
                        <span>{flowersCount} шт.</span>
                    </div>
                    <div>
                        <img src={bouquetHeightIco} alt={'Высота букета'}/>
                        <span>{bouquetHeight} см</span>
                    </div>
                    <div>
                        <img src={bouquetWidthIco} alt={'Ширина букета'}/>
                        <span>{bouquetWidth} см</span>
                    </div>
                </div>
            </div>
            <div className={styles.buttonGroup}>
                <div className={styles.cartButton}><span>В корзину</span></div>
                <div className={styles.buyNowButton}><span>Купить сразу</span></div>
            </div>
        </div>
    )
}
