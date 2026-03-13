import classes from './Header.module.scss';
import { Icon } from '@/components/Icon/Icon';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <a href="/public">
          <Icon src="common/logo-header.svg" width={187} height={50} alt="AQVEX" />
        </a>
      </div>
    </header>
  );
};
