// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';

import dsv from '@rollup/plugin-dsv';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), dsv()],
	ssr: {
		noExternal: ['three', 'troika-three-text'],
	  },
};

export default config;
