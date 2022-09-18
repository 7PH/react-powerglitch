import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: path.resolve(__dirname, 'lib'),
        target: 'es6',
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'PowerGlitch',
            formats: ['umd', 'es'],
            fileName: (format) => `react-powerglitch.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                exports: 'named',
            },
        },
    },
});
