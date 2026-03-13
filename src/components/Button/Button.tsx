import type { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react';
import classes from './Button.module.scss';
import clsx from 'clsx';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'transparent';
  fullWidth?: boolean;
}

interface TextButtonProps extends BaseButtonProps {
  children: ReactNode;
  icon?: ReactElement;
}

interface IconButtonProps extends BaseButtonProps {
  children?: ReactNode;
  icon: ReactElement;
}

type ButtonProps = TextButtonProps | IconButtonProps;

export const Button = ({
  children,
  icon,
  variant = 'primary',
  fullWidth = false,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        classes.button,
        classes[variant],
        {
          [classes.fullWidth]: fullWidth,
          [classes.iconOnly]: !children && icon,
        },
        className,
      )}
      {...rest}
    >
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
};
