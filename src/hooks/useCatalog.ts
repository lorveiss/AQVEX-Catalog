import { useState, useMemo } from 'react';
import { SORT_OPTIONS } from '@/consts/product';
import { ITEMS_PER_PAGE } from '@/consts/product';
import type { Product } from '@/types/product';
import type { SortOption } from '@/components/SortSelect/SortSelect';
import { filterProducts, sortProducts } from '@/utils/productFilters';
import { useDebounce } from '@/hooks/useDebounce';

export const useCatalog = (products: Product[] = []) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);

  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const processedProducts = useMemo(() => {
    const filtered = filterProducts(products, debouncedSearch);
    return sortProducts(filtered, sortBy);
  }, [products, debouncedSearch, sortBy]);

  const totalPages = Math.ceil(processedProducts.length / ITEMS_PER_PAGE);
  const currentItems = processedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleSortChange = (option: SortOption) => {
    setSortBy(option);
    setCurrentPage(1);
  };

  return {
    searchQuery,
    sortBy,
    currentPage,
    setCurrentPage,
    processedProducts,
    currentItems,
    totalPages,
    handleSearchChange,
    handleSortChange,
  };
};
