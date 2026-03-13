import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import classes from './SortSelect.module.scss';
import { Icon } from '@/components/Icon/Icon';

export interface SortOption {
  id: string;
  name: string;
}

interface SortSelectProps {
  options: SortOption[];
  selected: SortOption;
  onChange: (o: SortOption) => void;
}

export const SortSelect = ({ options, selected, onChange }: SortSelectProps) => {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className={classes.wrapper}>
        <ListboxButton className={classes.button}>
          <Icon src="icons/sort.svg" width={16} height={16} isDecorative />
          <span>{selected.name}</span>
          <span className={classes.chevron}>
            <Icon src="icons/chevron.svg" width={10} height={10} isDecorative />
          </span>
        </ListboxButton>
        <ListboxOptions modal={false} className={classes.options}>
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className={({ focus, selected }) =>
                `${classes.option} ${focus ? classes.focus : ''} ${selected ? classes.selected : ''}`
              }
            >
              {option.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};
