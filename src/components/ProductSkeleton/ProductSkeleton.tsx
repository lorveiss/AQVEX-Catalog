import classes from './ProductSkeleton.module.scss';

export const ProductSkeleton = () => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <div className={classes.imageShimmer} />
      </div>

      <div className={classes.content}>
        <div className={classes.priceRow}>
          <div className={`${classes.skeletonItem} ${classes.price}`} />
          <div className={`${classes.skeletonItem} ${classes.badge}`} />
        </div>

        <div className={classes.nameWrapper}>
          <div className={classes.skeletonItem} />
          <div className={`${classes.skeletonItem} ${classes.shortName}`} />
        </div>

        <div className={classes.ratingRow}>
          <div className={`${classes.skeletonItem} ${classes.stars}`} />
          <div className={`${classes.skeletonItem} ${classes.reviews}`} />
        </div>

        <div className={classes.meta}>
          <div className={`${classes.skeletonItem} ${classes.metaText}`} />
        </div>

        <div className={classes.actionsRow}>
          <div className={`${classes.skeletonItem} ${classes.select}`} />
          <div className={`${classes.skeletonItem} ${classes.button}`} />
        </div>
      </div>
    </div>
  );
};
