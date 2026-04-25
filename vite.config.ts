/* eslint-disable import/no-anonymous-default-export */
import { defineConfig, loadEnv } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
export default ({ mode }: any) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	return defineConfig({
		define: {
			STAAK_ENV: {
				API_URL: process.env.VITE_API_URL,
				APP_URL: process.env.VITE_APP_ROOT_URL,
				APP_ENV: process.env.VITE_APP_ENV,
				BASE_URL: process.env.VITE_APP_BASE_URL,
				STAAK_URL: process.env.VITE_STAAK_APP_URL,
				TINY_TEXT_EDITOR_API_KEY: process.env.VITE_TINY_TEXT_EDITOR_API_KEY,
			},
		},
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				path: 'rollup-plugin-node-polyfills/polyfills/path',
			},
			extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
			preserveSymlinks: true,
		},
		server: {
			port: 3006,
		},
	});
};
