const name = 'Erhan';
const surname = 'Algul';
const age = 30;


export const fullname = name + ' ' + surname;

export function sayhi() {
    console.log(`Hello, my name is ${name} ${surname}`);
}

export default {
    name,
    surname,
    age,
}