import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['lib/index.ts'],
	format: ['cjs', 'esm'],

	splitting: false,
	clean: true,
	dts: true,
});
