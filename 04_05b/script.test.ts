import { Hotel, HotelCategory } from './hotel';

describe('Hotel', () => {
  it('should create a new hotel', () => {
    const hotel = new Hotel('1', 'Test Hotel', 100, 'gold');
    expect(hotel).toBeInstanceOf(Hotel);
  });

  it('should have the correct properties', () => {
    const hotel = new Hotel('1', 'Test Hotel', 100, 'gold');
    expect(hotel.id).toBe('1');
    expect(hotel.name).toBe('Test Hotel');
    expect(hotel.cost).toBe(100);
    expect(hotel.category).toBe('gold');
  });

  it('should add an amenity', () => {
    const hotel = new Hotel('1', 'Test Hotel', 100, 'gold');
    hotel.addAmenity('pool');
    expect(hotel.amenities).toContain('pool');
  });

  it('should describe the hotel', () => {
    const hotel = new Hotel('1', 'Test Hotel', 100, 'gold');
    hotel.addAmenity('pool');
    hotel.addAmenity('gym');
    const description = hotel.describeHotel();
    expect(description).toBe(
      'The gold category Test Hotel costs $100 and includes the following amenities: pool, gym.'
    );
  });
});
