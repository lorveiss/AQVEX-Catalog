import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables.scss" as *;
          @use "@/styles/mixins.scss" as *;
          @use "@/styles/common.scss" as *;
        `,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
