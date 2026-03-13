import classes from './Pagination.module.scss';
import { Icon } from '@/components/Icon/Icon';
import { Button } from '@/components/Button/Button';
import { getPaginationRange } from '@/utils/getPaginationRange';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const range = getPaginationRange(currentPage, totalPages);

  return (
    <nav className={classes.pagination}>
      <Button
        variant={'transparent'}
        className={classes.arrow}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icon src="icons/arrow.svg" width={24} height={24} alt="Назад" />
      </Button>

      <div className={classes.pageList}>
        {range.map((page, index) => (
          <button
            key={index}
            className={`${classes.pageItem} ${page === currentPage ? classes.active : ''} ${page === '...' ? classes.ellipsis : ''}`}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            aria-label={`Перейти на сторінку ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <Button
        variant={'transparent'}
        className={classes.arrow}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Icon src="icons/arrow.svg" width={24} height={24} alt="Вперед" />
      </Button>
    </nav>
  );
};
