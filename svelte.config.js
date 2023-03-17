// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-cloudflare';

// import preprocess from 'svelte-preprocess';
// import autoprefixer from 'autoprefixer';


// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter({
// 			// See below for an explanation of these options
// 			routes: {
// 			  include: ['/*'],
// 			  exclude: ['<all>']
// 			}
// 		  }
// 		)
// 	},
// 	// let svelte take care of autoprefixing styles
// 	preprocess: preprocess({
// 		postcss: { plugins: [autoprefixer()] }
// 	})
// };

// export default config;

import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // ... truncated ...
  }
};

export default config;

