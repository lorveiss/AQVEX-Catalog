import { ProductCard } from '@/components/ProductCard/ProductCard';
import { ProductSkeleton } from '@/components/ProductSkeleton/ProductSkeleton';
import { Pagination } from '@/components/Pagination/Pagination';
import { Button } from '@/components/Button/Button';
import classes from './CatalogContent.module.scss';
import type { Product } from '@/types/product';

interface CatalogContentProps {
  isLoading: boolean;
  error: string | null;
  products: Product[];
  refetch: () => void;
  paginationProps: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

export const CatalogContent = ({
  isLoading,
  error,
  products,
  refetch,
  paginationProps,
}: CatalogContentProps) => {
  if (error && !isLoading) {
    return (
      <div className={classes.errorBlock}>
        <p>Произошла ошибка при загрузке товаров</p>
        <Button onClick={refetch} variant="primary">
          Повторить попытку
        </Button>
      </div>
    );
  }

  if (!isLoading && products.length === 0) {
    return <div>По вашему запросу ничего не найдено</div>;
  }

  return (
    <>
      <div className={classes.grid}>
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => <ProductSkeleton key={i} />)
          : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

      {!isLoading && paginationProps.totalPages > 1 && (
        <div className={classes.paginationWrapper}>
          <Pagination {...paginationProps} />
        </div>
      )}
    </>
  );
};
