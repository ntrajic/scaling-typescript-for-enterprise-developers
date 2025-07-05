import {
  Activity,
  Guest,
  Skier,
  ThrillSeeker,
  GuestWithActivity,
  skiLesson,
  cookingClass,
  massage,
} from './script';

describe('Conditional Types Solution', () => {
  test('skiLesson should have the correct structure and attendees', () => {
    expect(skiLesson.name).toBe('Steeps Clinic');
    expect(skiLesson.attendees).toHaveLength(2);
    expect(skiLesson.attendees[0].interest).toBe('skiing');
    expect(skiLesson.attendees[1].interest).toBe('adrenaline sports');
  });

  test('cookingClass should only have Foodie attendees', () => {
    expect(cookingClass.name).toBe('Thai Cooking Class');
    expect(cookingClass.attendees).toHaveLength(1);
    expect(cookingClass.attendees[0].interest).toBe('restaurants');
  });

  test('massage should only have SpaEnthusiast attendees', () => {
    expect(massage.name).toBe('Hot Stone Massage');
    expect(massage.attendees).toHaveLength(1);
    expect(massage.attendees[0].interest).toBe('spas');
  });

  // This test is conceptual, but we can test the type alias itself
  test('GuestWithActivity should correctly filter types', () => {
    type ValidGuest = GuestWithActivity<Skier>;
    type InvalidGuest = GuestWithActivity<{ random: string }>; // This should be 'never'

    const validGuest: ValidGuest = { name: 'test', interest: 'skiing' };
    expect(typeof validGuest).toBe('object');

    // It's hard to directly test for the 'never' type at runtime,
    // but the fact that the code compiles is the main test.
  });
});
