/**
 * @jest-environment jsdom
 */

import counter from '../modules/counter.js';

test('count of the number of comments', () => {
  const comments = [
    {
      item_id: 1,
      username: 'fred',
      comment: 'nice!',
    },
    {
      item_id: 2,
      username: 'ann',
      comment: 'wow!',
    },
  ];
  const count = counter(comments);
  expect(count).toBe(2);
});
