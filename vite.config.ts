import { defineConfig } from 'vite';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: '/01-ts-basics/', // шлях до репозиторію на GitHub Pages
});
