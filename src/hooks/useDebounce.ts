import { useState, useEffect } from 'react';

/**
 * Хук для задержки обновления значения.
 * @param value Значение, которое необходимо дебаунсить (строка, число и т.д.)
 * @param delay Задержка в миллисекундах (по умолчанию 300 мс)
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
