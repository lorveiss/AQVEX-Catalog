import classes from './SearchBar.module.scss';
import { Icon } from '@/components/Icon/Icon';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className={classes.searchWrapper}>
      <Icon
        src="icons/search.svg"
        width={21}
        height={21}
        className={classes.searchIcon}
        alt="Поиск"
      />
      <input
        type="text"
        className={classes.searchInput}
        placeholder="Поиск"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="search"
      />
    </div>
  );
};
