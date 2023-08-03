import faker from "faker"

export const REG_INFO = () => {
    return {
        first_n: faker.name.firstName(),
        last_n: faker.name.lastName(),
        email:'test'+faker.random.number({min:1300, max:9977})+'@t.est',
        number: '1234567890',
        password: 'Aa123456'
    }
}

export const LOGIN_INFO = () => {
    return {
        existingEmail: 'm@m.m',
        existingPassword: '12345',
        wrongPassword: 'Aa12345'
    }
}