import { api } from './axios';
import type { Product, ProductsResponse } from '@/types/product';

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ProductsResponse>('/products');

  return response.data.data.products;
};
