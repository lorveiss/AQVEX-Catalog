import { useEffect } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { CatalogControls } from '@/pages/CatalogPage/CatalogControls/CatalogControls';
import classes from './CatalogPage.module.scss';
import { SORT_OPTIONS } from '@/consts/product';
import { useCatalog } from '@/hooks/useCatalog';
import { CatalogContent } from '@/pages/CatalogPage/CatalogContent/CatalogContent';

export const CatalogPage = () => {
  const { products, isLoading, error, refetch } = useProducts();
  const {
    searchQuery,
    sortBy,
    currentPage,
    setCurrentPage,
    processedProducts,
    currentItems,
    totalPages,
    handleSearchChange,
    handleSortChange,
  } = useCatalog(products);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <section className={classes.catalog}>
      <div className={classes.container}>
        <CatalogControls
          totalCount={processedProducts.length}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          sortOptions={SORT_OPTIONS}
          currentSort={sortBy}
          onSortChange={handleSortChange}
        />

        <CatalogContent
          isLoading={isLoading}
          error={error}
          products={currentItems}
          refetch={refetch}
          paginationProps={{
            currentPage,
            totalPages,
            onPageChange: setCurrentPage,
          }}
        />
      </div>
    </section>
  );
};
