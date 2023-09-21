const paramentersLongList = require('./parametersLongList');
const standarUser = {
    name: 'Juan',
    lastname: 'Cruz',
    phone: '123456789',
    email: 'qKvZy@example.com',
    addreess: 'Calle falsa 123',
    creditCard: 44,
    birthday: '2022-01-01',
    city: 'Posadas',
    country: 'Argentina',
    accountName: 'Juan Cruz'
}
// const mockAddToDataBase = jest.fn( x => 14);
describe('Parameters Long List', () => {
    it('should add User', () => {
        const user = standarUser;
        const spy = jest.spyOn(paramentersLongList, 'addToDataBase');
        const response = paramentersLongList.addUser(user.name, user.lastname, user.phone, user.email, user.addreess, user.creditCard, user.birthday, user.city, user.country, user.accountName);
        expect(spy).toBeCalledTimes(2);
        expect(response).toBe(14);
    });
    
    it('should not add User for invalid credit card', () => {
        const user = {...standarUser, creditCard: 55};
        const response = paramentersLongList.addUser(user.name, user.lastname, user.phone, user.email, user.addreess, user.creditCard, user.birthday, user.city, user.country, user.accountName);
        expect(response.error).toBe('La tarjeta no es válida');
    });

    it('should not add User for invalid city', () => {
        const user = {...standarUser, city: 'Corrientes'};
        const response = paramentersLongList.addUser(user.name, user.lastname, user.phone, user.email, user.addreess, user.creditCard, user.birthday, user.city, user.country, user.accountName);
        expect(response.error).toBe('Solo usuarios de la ciudad de Posadas pueden registrarse');
    });

    it('should not add User for missing fields', () => {
        const {creditCard, accountName, city, ...user} = standarUser;
        const randomKey = Object.keys(user)[Math.floor(Math.random() * Object.keys(user).length)];
        user[randomKey] = '';
        const response = paramentersLongList.addUser(user.name, user.lastname, user.phone, user.email, user.addreess, creditCard, user.birthday, city, user.country, accountName);
        expect(response.error).toBe('Todos los campos son obligatorios');
    });

    it('should not add User for db error', () => {
        const user = {...standarUser, name: 'invalid'};
        const spy = jest.spyOn(paramentersLongList, 'addToDataBase');
        const response = paramentersLongList.addUser(user.name, user.lastname, user.phone, user.email, user.addreess, user.creditCard, user.birthday, user.city, user.country, user.accountName);
        expect(spy).toBeCalledTimes(1);
        expect(response.error).toBe('No se ha podido registrar el usuario');
    });

    it('should add a user but not an office', () => {
        const user = {...standarUser, accountName: 'invalid'};
        const spy = jest.spyOn(paramentersLongList, 'addToDataBase');
        const response = paramentersLongList.addUser(user.name, user.lastname, user.phone, user.email, user.addreess, user.creditCard, user.birthday, user.city, user.country, user.accountName);
        expect(spy).toBeCalledTimes(2);
        expect(response.userId).toBe(14);
        expect(response.error).toBe('No se ha podido registrar la oficina');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});