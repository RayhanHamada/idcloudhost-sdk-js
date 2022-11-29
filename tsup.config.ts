import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['lib/index.ts'],
	format: ['cjs', 'esm'],
	clean: true,
	dts: true,
});
