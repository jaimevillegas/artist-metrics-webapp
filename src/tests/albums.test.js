import fetchAlbums from './__mocks__/fetchAlbums';

describe('fetchAlbums', () => {
  test('Should return defined data', () => {
    expect(fetchAlbums()).toBeDefined();
  });

  test('Fetch albums must return a value of 5', () => {
    expect(fetchAlbums()).toHaveLength(5);
  });

  test('Fifth fetched album must be "Animals"', () => {
    expect(fetchAlbums()[4].name).toBe('Animals');
  });
});
