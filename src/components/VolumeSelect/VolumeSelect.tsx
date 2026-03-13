import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { Icon } from '@/components/Icon/Icon';
import classes from './VolumeSelect.module.scss';
import type { ProductVolume } from '@/types/product';
import clsx from 'clsx';

interface VolumeSelectProps {
  options: ProductVolume[];
  value: ProductVolume;
  onChange: (o: ProductVolume) => void;
}

export const VolumeSelect = (props: VolumeSelectProps) => {
  const { options, value, onChange } = props;

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <div className={classes.selectWrapper}>
          <ListboxButton className={`${classes.volumeSelect} ${open ? classes.isOpen : ''}`}>
            <span className={classes.buttonText}>{value.label}</span>
            <Icon
              src="icons/chevron.svg"
              width={10}
              height={10}
              className={classes.selectIcon}
              isDecorative
            />
          </ListboxButton>

          <ListboxOptions modal={false} className={classes.optionsList}>
            {options.map((volume) => (
              <ListboxOption
                key={volume.id}
                value={volume}
                className={({ active, selected, disabled }) =>
                  clsx(classes.option, {
                    [classes.active]: active,
                    [classes.selected]: selected,
                    [classes.disabled]: disabled,
                  })
                }
                disabled={!volume.in_stock}
              >
                {volume.label}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      )}
    </Listbox>
  );
};
