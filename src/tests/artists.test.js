import fetchArtists from './__mocks__/fetchArtists';

describe('fetchArtists', () => {
  test('Should return defined data', () => {
    expect(fetchArtists()).toBeDefined();
  });

  test('Fetch artist must return a value of 21', () => {
    expect(fetchArtists()).toHaveLength(21);
  });

  test('Fifth fetched artist must be "SZA"', () => {
    expect(fetchArtists()[4].name).toBe('SZA');
  });
});
