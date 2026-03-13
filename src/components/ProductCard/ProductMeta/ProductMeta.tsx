import { Icon } from '@/components/Icon/Icon';
import classes from './ProductMeta.module.scss';
import clsx from 'clsx';

interface ProductMetaProps {
  inStock: boolean;
  category: string;
  className?: string;
}

export const ProductMeta = ({ inStock, category, className }: ProductMetaProps) => (
  <div className={clsx(classes.meta, className)}>
    <span className={inStock ? classes.inStock : classes.outOfStock}>
      {inStock ? 'В наличии' : 'Нет в наличии'}
    </span>
    <Icon src="icons/icon-separator.svg" width={16} height={16} isDecorative />
    <span className={classes.category}>{category}</span>
  </div>
);
