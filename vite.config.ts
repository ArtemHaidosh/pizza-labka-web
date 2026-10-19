import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative base: the same build works at a domain root and in a sub-folder (GitHub Pages).
  base: './',
  plugins: [react()],
});
