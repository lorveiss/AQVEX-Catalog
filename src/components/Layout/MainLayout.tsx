import classes from './MainLayout.module.scss';
import { Header } from '@/components/Layout/Header/Header';
import { Footer } from '@/components/Layout/Footer/Footer';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};
