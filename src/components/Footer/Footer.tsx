import classes from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.logos}>
            <img src="/images/common/logo-footer.svg" alt="AQVEX" />
            <img src="/images/icons/made-in-ua.svg" alt="Зроблено в Україні" />
          </div>

          <span className={classes.copyrights}>AQVEX © {currentYear} | Все права защищены</span>
        </div>

        <div className={classes.payments}>
          <img src="/images/payments/mastercard.svg" alt="Mastercard" />
          <img src="/images/payments/visa.svg" alt="Visa" />
          <img src="/images/payments/apple-pay.svg" alt="Apple Pay" />
          <img src="/images/payments/google-pay.svg" alt="Google Pay" />
        </div>
      </div>
    </footer>
  );
};
