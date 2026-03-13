/**
 * Возвращает правильную форму слова «товар» в зависимости от количества.
 * Например: 1 товар, 2 товара, 5 товаров.
 */
export const getProductWord = (count: number) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return 'товаров';
  if (lastDigit === 1) return 'товар';
  if (lastDigit >= 2 && lastDigit <= 4) return 'товара';
  return 'товаров';
};
