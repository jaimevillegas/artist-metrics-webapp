import fetchTracks from './__mocks__/fetchTracks';

describe('fetchTracks', () => {
  test('Should return defined data', () => {
    expect(fetchTracks()).toBeDefined();
  });

  test('Fetch tracks must return a value of 5', () => {
    expect(fetchTracks()).toHaveLength(5);
  });

  test('First fetched track must be "Wish You Were Here"', () => {
    expect(fetchTracks()[0].name).toBe('Wish You Were Here');
  });
});
