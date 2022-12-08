import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

const commonOptions: Options = {
	entry: ['lib/index.ts', 'lib/user/*.ts'],
	clean: true,
	dts: true,
};

const buildOptions: Options[] = [
	{
		...commonOptions,
		format: ['cjs'],
		outDir: 'dist',
	},
	{
		...commonOptions,
		format: ['esm'],
		outDir: 'dist/esm',
	},
];

export default defineConfig(buildOptions);
