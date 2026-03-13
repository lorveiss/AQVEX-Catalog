import classes from './Footer.module.scss';
import { Icon } from '@/components/Icon/Icon';
import { getCurrentYear } from '@/utils/date';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.logos}>
            <Icon src="common/logo-footer.svg" width={40} height={40} alt="AQVEX" />
            <Icon src="common/made-in-ua.svg" width={58} height={40} alt="Зроблено в Україні" />
          </div>

          <span className={classes.copyrights}>
            AQVEX © {getCurrentYear()} | Все права защищены
          </span>
        </div>

        <div className={classes.payments}>
          <Icon src="payments/mastercard.svg" width={77} height={34} alt="Mastercard" />
          <Icon src="payments/visa.svg" width={69} height={34} alt="Visa" />
          <Icon src="payments/apple-pay.svg" width={62} height={34} alt="Apple Pay" />
          <Icon src="payments/google-pay.svg" width={64} height={34} alt="Google Pay" />
        </div>
      </div>
    </footer>
  );
};
