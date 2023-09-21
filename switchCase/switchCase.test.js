const {switchCase, ifStament} = require('./switchCase');
const pokemons = ['pikachu', 'squirtle', 'charmander', 'bulbasaur'];
describe('Switch Case values', () => {
    it('should call getPokemon type', () => {
        const spy = jest.spyOn(switchCase, 'getPokemonType');
        switchCase.getPokemonType();
        expect(spy).toBeCalledTimes(1);
    });
    
    it('should return pikachu type', () => {
        const response = switchCase.getPokemonType(pokemons[0]);
        expect(response).toBe('electric');
    });

    it('should return squirtle type', () => {
        const response = switchCase.getPokemonType(pokemons[1]);
        expect(response).toBe('water');
    });

    it('should return charmander type', () => {
        const response = switchCase.getPokemonType(pokemons[2]);
        expect(response).toBe('fire');
    });

    it('should return bulbasaur type', () => {
        const response = switchCase.getPokemonType(pokemons[3]);
        expect(response).toBe('grass');
    });

    it('should return unknown type', () => {
        const response = switchCase.getPokemonType(pokemons[4]);
        expect(response).toBe('unknown');
    });
    
    afterEach(() => {
        jest.restoreAllMocks();
    });

});

describe('Switch Case actions', () => {
    it('should call performPokemon attack', () => {
        const spy = jest.spyOn(switchCase, 'performPokemonAttack');
        switchCase.performPokemonAttack();
        expect(spy).toBeCalledTimes(1);
    });
    it('should perform pikachu attack', () => {
        const spy = jest.spyOn(switchCase, 'electricEffect');
        const response = switchCase.performPokemonAttack(pokemons[0]);
        expect(spy).toBeCalledTimes(1);
        expect(response).toBe(0.4);
    });
    it('should perform squirtle attack', () => {
        const spy = jest.spyOn(switchCase, 'watterEffect');
        const response = switchCase.performPokemonAttack(pokemons[1]);
        expect(spy).toBeCalledTimes(1);
        expect(response).toBe(0.25);
    });
    it('should perform charmander attack', () => {
        const spy = jest.spyOn(switchCase, 'fireEffect');
        const response = switchCase.performPokemonAttack(pokemons[2]);
        expect(spy).toBeCalledTimes(1);
        expect(response).toBe(0.3);
    });
    it('should perform bulbasaur attack', () => {
        const spy = jest.spyOn(switchCase, 'grassEffect');
        const response = switchCase.performPokemonAttack(pokemons[3]);
        expect(spy).toBeCalledTimes(1);
        expect(response).toBe(0.2);
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
});

describe.only('If Stament', () => {
    it('get  simple interest', () => {
        const response = ifStament.getInterestByType('simple');
        expect(response).toBe(10);
    });
    it('get not simple interest', () => {
        const response = ifStament.getInterestByType('anuthing');
        expect(response).toBe(20);
    })
});