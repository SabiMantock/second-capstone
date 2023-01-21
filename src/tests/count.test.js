/**
 * @jest-environment jsdom
 */

import counter from '../modules/counter.js';

test('expect length of items to be 2', async () => {
  const items = ['firstItem', 'secondItem'];
  const emptyCount = counter([]);
  const count = counter(items);
  expect(emptyCount).toBe(0);
  expect(count).toBe(2);
});