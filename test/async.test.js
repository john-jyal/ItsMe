function fetchUser(id, cb) {
  setTimeout(() => {
    console.log('wait 0.1 sec.');
    const user = {
      id: id,
      name: 'User' + id,
      email: id + '@test.com',
    };
    cb(user);
  }, 100);
}
function fetchUserPromise(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('wait 2 sec.');
      const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com',
      };
      resolve(user);
    }, 2000);
  });
}
test('fetch a user', (done) => {
  fetchUser(1, (user) => {
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com',
    });
    done();
  });
});
test('fetch a userPromise', () => {
  return fetchUserPromise(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com',
    });
  });
});
test('fetch a userAsync', async () => {
  const user = await fetchUserPromise(1);
  expect(user).toEqual({
    id: 1,
    name: 'User1',
    email: '1@test.com',
  });
});
