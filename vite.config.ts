import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Force rebuild
export default defineConfig({
  plugins: [react()],
});
