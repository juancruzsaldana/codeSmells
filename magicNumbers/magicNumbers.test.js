const magicNumbers = require('./magicNumbers');
describe('Magic numbers', () => {
    
    // with moment
    it('Is more than a day with moment', () => {
        expect(magicNumbers.isMoreThanADayWithMoment('2022-01-01', '2022-01-02')).toBe(true);
    });
    
    it('Isnt more than a day with moment', () => {
        expect(magicNumbers.isMoreThanADayWithMoment('2022-01-01', '2022-01-01')).toBe(false);
    })
    // with date
    it('Isnt more than a day', () => {
        expect(magicNumbers.isMoreThanADay('2022-01-01', '2022-01-01')).toBe(false);
    });
    
    it('Is more than a day', () => {
        expect(magicNumbers.isMoreThanADay('2022-01-01', '2022-01-02')).toBe(true);
    });
});
    