/**
 * @jest-environment jsdom
 */

import counter from '../modules/counter.js';

test('count of the comments should be 2', () => {
  const comments = ['firstComment', 'secondComment'];
  const count = counter(comments);
  expect(count).toBe(2);
});