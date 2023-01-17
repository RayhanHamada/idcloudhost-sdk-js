import { defineConfig } from 'vitest/config';

/**
 * Config only for testing
 */
export default defineConfig({
    test: {
        coverage: {
            provider: 'c8',
        },
    },
});
