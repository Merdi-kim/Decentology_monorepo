import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';
import polyfillNode from 'rollup-plugin-polyfill-node';
import * as React from 'react';
export default defineConfig({
	plugins: [polyfillNode(), react()],
	optimizeDeps: {
		include: [],
		esbuildOptions: {
			define: {
				global: 'globalThis',
			},
			plugins: [
				NodeGlobalsPolyfillPlugin({
					buffer: true,
				}),
			],
		},
	},
	resolve: {
		alias: {
			'react/jsx-runtime': 'react/jsx-runtime.js',
		},
	},
	define: {
		process: {
			env: {},
		},
		React: React,
	},
});
