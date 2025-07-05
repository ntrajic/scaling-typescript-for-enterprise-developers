import { Skier, SpaEnthusiast, Foodie, ThrillSeeker } from './guests';
import { skiLesson, cookingClass, massage } from './activities';

describe('Capstone Project 4', () => {
  it('should have a ski lesson with the correct attendees', () => {
    const attendees = skiLesson.attendees;
    expect(attendees).toHaveLength(2);
    expect(attendees[0].interest).toBe('skiing');
    expect(attendees[1].interest).toBe('adrenaline sports');
  });

  it('should have a cooking class with the correct attendees', () => {
    const attendees = cookingClass.attendees;
    expect(attendees).toHaveLength(1);
    expect(attendees[0].interest).toBe('restaurants');
  });

  it('should have a massage with the correct attendees', () => {
    const attendees = massage.attendees;
    expect(attendees).toHaveLength(1);
    expect(attendees[0].interest).toBe('spas');
  });
});
