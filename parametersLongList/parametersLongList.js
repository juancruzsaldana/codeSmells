const parametersLongList = {
    addUser (name, lastname, phone, email, addreess, creditCard, birthday, city, country, accountName) {
        if(creditCard === 44){
            if(city === 'Posadas'){
                if(name !== '' && lastname !== '' && phone !== '' && email !== '' && addreess !== ''  && birthday !== '' && country !== ''){
                    const sql = `INSERT INTO users (name, lastname, phone, email, addreess, creditCard, birthday, city, country) VALUES (${name}, ${lastname}, ${phone}, ${email}, ${addreess}, ${creditCard}, ${birthday}, ${city}, ${country})`;
                    const userId = this.addToDataBase(sql);
                    if(userId){
                        const sqlOffice = `INSERT INTO offices (userId, accountName) VALUES (${userId}, ${accountName})`;
                        const officeId = this.addToDataBase(sqlOffice);
                        if(officeId){
                            return userId
                        }else{
                            return {error: 'No se ha podido registrar la oficina', userId}
                        }
                    }else{
                        return {error: 'No se ha podido registrar el usuario'}
                    }
    
                }else{
                    return {error: 'Todos los campos son obligatorios'}
                }
            }else{
                return {error: 'Solo usuarios de la ciudad de Posadas pueden registrarse'}
            }
    
        }else{
            return {error: 'La tarjeta no es válida'}
        }
     
    },
    addToDataBase(sql) {
        if(sql.indexOf('invalid') !== -1){
            return 0;
        }
        return 14;
    },
    validateIfObjectHasEmptyFields(user) {
        return Object.values(user).some(value => value === '' || value === null || value === undefined);
    }
}


module.exports = parametersLongList