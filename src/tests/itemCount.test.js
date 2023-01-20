/**
 * @jest-environment jsdom
 */

import counter from '../modules/counter.js';

test('should first', async () => {
  const items = ['firstItem', 'secondItem'];
  const count = counter(items);
  expect(count).toBe(2);
});