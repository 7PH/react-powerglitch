import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: path.resolve(__dirname, 'docs'),
        target: 'es6',
    },
});
