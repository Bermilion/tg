import {
    defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
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
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), 'resources/icons')],
            symbolId: 'icon-[dir]-[name]',
            svgoOptions: {
                plugins: [
                    {
                        name: 'removeAttrs',
                        params: {
                            attrs: 'fill',
                        },
                    },
                    {
                        name: 'addAttributesToSVGElement',
                        params: {
                            attributes: [{fill: 'currentColor'}],
                        },
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@config': resolve(__dirname, 'resources/scss/config'),
            '@core': resolve(__dirname, 'resources/scss/core'),
            '@utils': resolve(__dirname, 'resources/scss/utils'),
            '@mixins': resolve(__dirname, 'resources/scss/utils/mixins'),
            '@colors': resolve(__dirname, 'resources/scss/utils/tailwind-colors'),
            '@ui': resolve(__dirname, 'resources/views/site/ui'),
        }
    },
    server: {
        cors: true,
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
