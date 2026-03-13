import { MainLayout } from '@/components/Layout/MainLayout';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';

function App() {
  return (
    <div>
      <MainLayout>
        <CatalogPage />
      </MainLayout>
    </div>
  );
}

export default App;
