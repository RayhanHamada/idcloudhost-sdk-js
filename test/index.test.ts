import { helloWorld } from 'lib/index';
import { expect, test } from 'vitest';

test('HelloWorld should be hello', () => {
	expect(helloWorld('hello')).toBe('hello');
});
