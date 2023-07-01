

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;



export default function validate(input) {

    const errors = {};
    const filterPass = input['password'].split('').filter((element) => Number(element) !== NaN)

    if (!input.username){
        errors.username = 'Se requiere un Usuario';
    }
    if (!regexEmail.test(input.username)){
       errors.username = 'Debe ser un correo electrónico';
    }
    else if (input.username.length > 34){
        errors.username = 'El Usuario no puede tener mas de 35 caracteres';
    }
    if (!filterPass.length){
        errors.password = 'La contraseña debe tener al menos un número';
    }
    else if (input.password.length < 6  || input.password.length > 10){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
    }

    return errors;
}