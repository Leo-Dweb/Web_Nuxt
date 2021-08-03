import {extend, setInteractionMode} from "vee-validate";
import { min, max } from "vee-validate/dist/rules";

// Moodes Interactive
    setInteractionMode('eager, lazy')

// Rules
extend( 'required', {
    validate(value){
        return{
            required: true,
            valid: ['', null, undefined].indexOf(value) === -1
        };
    },
    message:'Campo {_field_} es requerido',
    computesRequired: true

});

extend('min', {
    ...min,
    message: 'Campo {_field_} requiere mínimo 3 caracteres '

})
extend('max', {
    ...max,
    message: 'Campo {_field_} requiere máximo 25 caracteres '

})

extend('minmax', {
    validate(value, {min, max}){
        return value.length >= min && value.length <= max;
    },
    params: ['min', 'max'],
    message: (fieldName, placeholders) => {
        return `${fieldName} requiere mínimo ${placeholders.min} caracteres y máximo de ${placeholders.max}`
    }
})

// 
// Selection for Validate   



// '{_field_} requiere un máximo de {max} caracteres y un mínimo de {min}'