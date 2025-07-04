const { Hotel } = require('./script');

describe('Hotel Class', () => {

  // Test for Requirement 2 & 5: category field is added and initialized
  test('should have a category property', () => {
    const peakLodge = new Hotel("06", "Peak Lodge", 250, "silver");
    expect(peakLodge.category).toBe("silver");
  });

  // Test for Requirement 4: describeHotel method includes category
  test('describeHotel method should include the category', () => {
    const peakLodge = new Hotel("06", "Peak Lodge", 250, "gold");
    const description = peakLodge.describeHotel();
    expect(description).toContain('The gold category');
  });

  // Test for Requirement 5: creating an instance with a category
  test('should create a new hotel instance with a category', () => {
    const h = new Hotel("07", "Test Hotel", 100, "bronze");
    expect(h).toBeInstanceOf(Hotel);
    expect(h.name).toBe("Test Hotel");
    expect(h.category).toBe("bronze");
  });

});
