// import '@ttd/archipelago-config';

import { defineConfig, PluginOption } from 'vite';


// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
    build: {
        minify: false,
        sourcemap: true,
        rollupOptions: {
            input: './sourceFile.ts',
            output: { entryFileNames: 'entry.js' },
            preserveEntrySignatures: 'allow-extension',
        },
        outDir: 'dist',
        manifest: true,
    },


});
