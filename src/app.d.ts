// // See https://kit.svelte.dev/docs/types#app
// // for information about these interfaces
// declare global {
// 	namespace App {
// 		// interface Error {}
// 		interface Locals {}
// 		interface PageData {}
// 		interface Platform {
// 			env: {
// 				COUNTER: DurableObjectNamespace;
// 				};
// 				context: {
// 				 waitUntil(promise: Promise<any>): void;
// 				 };
// 				 caches: CacheStorage & { default: Cache }
// 		}
// 	}
// }

// export async function post({ request, platform }) {
// 	const counter = platform.env.COUNTER.idFromName("A");
//   }
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Locals {}

	    interface Platform {
			env: {
			COUNTER: DurableObjectNamespace;
			};
			context: {
			waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache }
			}	
			interface Session {}

    		interface Stuff {}
		}
}

export {};

export async function post({ request, platform }) {
	const counter = platform.env.COUNTER.idFromName("A");
  }
