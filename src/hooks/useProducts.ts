import { useState, useEffect, useCallback } from 'react';
import { getProducts } from '@/api/products';
import type { Product } from '@/types/product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProductsData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError('Не удалось загрузить товары. Попробуйте обновить страницу.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  return {
    products,
    isLoading,
    error,
    refetch: fetchProductsData,
  };
};
