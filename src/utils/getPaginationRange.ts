/**
 * Формирует массив номеров страниц для пагинации с добавлением «...» (многоточия).
 * @param current Текущая активная страница.
 * @param total Общее количество страниц.
 * @returns Массив, содержащий номера страниц и точки.
 */
export const getPaginationRange = (current: number, total: number) => {
  const range: (number | string)[] = [];
  const delta = 2;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    } else if (range[range.length - 1] !== '...') {
      range.push('...');
    }
  }
  return range;
};
