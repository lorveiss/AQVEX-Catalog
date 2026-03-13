import { Icon } from '@/components/Icon/Icon';
import classes from './ProductPrice.module.scss';
import clsx from 'clsx';

interface ProductPriceProps {
  price: number;
  oldPrice?: number;
  discount?: number;
  className?: string;
}

export const ProductPrice = ({ price, oldPrice, discount, className }: ProductPriceProps) => (
  <div className={clsx(classes.price, className)}>
    {oldPrice && oldPrice > 0 && <span className={classes.oldPrice}>{oldPrice}</span>}
    <span className={classes.currentPrice}>{price} грн</span>
    {discount && discount > 0 && (
      <div className={classes.discountBadge}>
        <span>{discount}%</span>
        <Icon src="icons/discount-tag.svg" width={44} height={18} isDecorative />
      </div>
    )}
  </div>
);
