import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <a href="/">
          <img src="/images/common/logo-header.svg" alt="AQVEX" />
        </a>
      </div>
    </header>
  );
};
