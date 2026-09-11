import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Force rebuild
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
