import clsx from 'clsx';
import classes from './StarRating.module.scss';
import { Icon } from '@/components/Icon/Icon';

interface StarRatingProps {
  rating: number;
  reviewsCount: number;
  maxStars?: number;
  className?: string;
}

export const StarRating = ({ rating, reviewsCount, maxStars = 5, className }: StarRatingProps) => {
  const filledStars = Math.round(rating);

  return (
    <div
      className={clsx(classes.rating, className)}
      aria-label={`Рейтинг ${rating} из ${maxStars}, количество просмотров: ${reviewsCount}`}
    >
      <div className={classes.stars} aria-hidden="true">
        {Array.from({ length: maxStars }).map((_, i) => (
          <Icon
            key={i}
            src="icons/star.svg"
            width={12}
            height={14}
            isDecorative
            className={clsx(classes.star, {
              [classes.starFilled]: i < filledStars,
              [classes.starEmpty]: i >= filledStars,
            })}
          />
        ))}
      </div>
      <span className={classes.reviewsCount}>{reviewsCount}</span>
    </div>
  );
};
