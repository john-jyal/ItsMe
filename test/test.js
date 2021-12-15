test('return a user object', () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});
function repeat(word, times = 2) {
  let words = [];
  for (let i = 0; i < times; i++) {
    words.push(word);
  }
  return words;
}

test('repeats words three times', () => {
  expect(repeat('Test', 3)).toMatchInlineSnapshot(`
    Array [
      "Test",
      "Test",
      "Test",
    ]
  `);
});
test('number 0 is falsy but string 0 is truthy', () => {
  expect(0).toBeFalsy();
  expect('0').toBeTruthy();
});
function getUser(id) {
  if (id <= 0) throw new Error('Invalid ID');
  return {
    id,
    email: `user${id}@test.com`,
  };
}
test('throw when id is non negative', () => {
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow('Invalid ID');
});
