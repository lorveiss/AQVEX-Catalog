import type { Product } from '@/types/product';
import classes from './ProductCard.module.scss';
import { useState } from 'react';
import { Icon } from '@/components/Icon/Icon';
import { Button } from '@/components/Button/Button';
import { StarRating } from '@/components/StarRating/StarRating';
import { VolumeSelect } from '@/components/VolumeSelect/VolumeSelect';
import { getProductImage } from '@/utils/getProductImage';
import { ProductPrice } from '@/components/ProductCard/ProductPrice/ProductPrice';
import { ProductMeta } from '@/components/ProductCard/ProductMeta/ProductMeta';

interface ProductProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductProps) => {
  const [selectedVolume, setSelectedVolume] = useState(
    product.volumes.find((v) => v.id === product.selected_volume_id) || product.volumes[0],
  );

  const hasVolumes = product.volumes && product.volumes.length > 1;

  return (
    <article className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          src={getProductImage(product.image)}
          alt={product.name}
          width="345"
          height="345"
          loading="lazy"
        />
      </div>

      <ProductPrice
        price={product.price}
        oldPrice={product.old_price}
        discount={product.discount_percent}
        className={classes.priceRow}
      />

      <h3 className={classes.name}>{product.name}</h3>

      <StarRating
        rating={product.rating}
        reviewsCount={product.reviews_count}
        className={classes.ratingRow}
      />

      <ProductMeta
        inStock={product.in_stock}
        category={product.category}
        className={classes.metaRow}
      />

      <div className={classes.actionsRow}>
        {hasVolumes && (
          <VolumeSelect
            options={product.volumes}
            value={selectedVolume}
            onChange={setSelectedVolume}
          />
        )}

        <Button
          icon={<Icon src="icons/shopping-cart.svg" width={26} height={26} isDecorative />}
          fullWidth
        >
          В корзину
        </Button>
      </div>
    </article>
  );
};
