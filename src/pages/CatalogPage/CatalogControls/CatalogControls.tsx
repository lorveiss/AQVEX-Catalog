import { SearchBar } from '@/components/SearchBar/SearchBar';
import { SortSelect } from '@/components/SortSelect/SortSelect';
import type { SortOption } from '@/components/SortSelect/SortSelect';
import classes from './CatalogControls.module.scss';
import { getProductWord } from '@/utils/declension';

interface CatalogControlsProps {
  totalCount: number;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  sortOptions: SortOption[];
  currentSort: SortOption;
  onSortChange: (option: SortOption) => void;
}

export const CatalogControls = ({
  totalCount,
  searchQuery,
  onSearchChange,
  sortOptions,
  currentSort,
  onSortChange,
}: CatalogControlsProps) => {
  return (
    <div className={classes.controls}>
      <div className={classes.searchRow}>
        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>

      <div className={classes.infoRow}>
        <span className={classes.count}>
          {totalCount} {getProductWord(totalCount)}
        </span>

        <SortSelect options={sortOptions} selected={currentSort} onChange={onSortChange} />
      </div>
    </div>
  );
};
