import { createTsupConfig } from '../../tsup.config.js';

export default createTsupConfig({
	entry: {
		index: 'src/index.ts',
		worker: 'src/strategies/sharding/worker.ts',
	},
	external: ['zlib-sync'],
});
