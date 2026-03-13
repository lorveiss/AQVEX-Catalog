import type { Product } from '@/types/product';
import type { SortOption } from '@/components/SortSelect/SortSelect';

/**
 * Фильтрует список товаров по названию (без учета регистра).
 */
export const filterProducts = (products: Product[], query: string): Product[] => {
  if (!query) return products;
  const lowerQuery = query.toLowerCase();
  return products.filter((p) => p.name.toLowerCase().includes(lowerQuery));
};

/**
 * Сортирует товары по выбранному критерию (цена, рейтинг).
 */
export const sortProducts = (products: Product[], sortBy: SortOption): Product[] => {
  const result = [...products];

  switch (sortBy.id) {
    case 'price-asc':
      return result.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return result.sort((a, b) => b.price - a.price);
    default:
      return result.sort((a, b) => b.reviews_count - a.reviews_count);
  }
};
