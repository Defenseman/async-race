import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => ({
  plugins: [react(), svgr(), mode !== 'production' && eslint()].filter(Boolean),
}));
