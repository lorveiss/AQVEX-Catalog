import clsx from 'clsx';
import classes from './Icon.module.scss';

type DecorativeIcon = {
  isDecorative: true;
  alt?: never;
};

type InformativeIcon = {
  isDecorative?: false;
  alt: string;
};

export type IconProps = (DecorativeIcon | InformativeIcon) &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> & {
    src: string;
    width: number;
    height: number;
  };

export const Icon = ({
  src,
  alt,
  isDecorative = false,
  className,
  width,
  height,
  ...rest
}: IconProps) => {
  return (
    <img
      src={`/images/${src}`}
      alt={isDecorative ? '' : alt}
      aria-hidden={isDecorative}
      width={width}
      height={height}
      className={clsx(classes.Icon, className)}
      {...rest}
    />
  );
};
