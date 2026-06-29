import {
    defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/js/passkeys.js',
            ],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@config': resolve(__dirname, 'resources/scss/config'),
            '@core': resolve(__dirname, 'resources/scss/core'),
            '@utils': resolve(__dirname, 'resources/scss/utils'),
            '@mixins': resolve(__dirname, 'resources/scss/utils/mixins'),
            '@colors': resolve(__dirname, 'resources/scss/utils/tailwind-colors'),
        }
    },
    server: {
        cors: true,
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
