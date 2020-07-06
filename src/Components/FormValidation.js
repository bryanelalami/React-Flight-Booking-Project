import React from 'react';

const FormValidation = () => {
    const validate = (values) => {
        
        let errors = {};

        if(!values.MERGE0) {
            errors.MERGE0 = 'Veuillez saisir un email valide';
        }

        if(!values.MERGE1) {
            errors.MERGE1 = 'Veuillez saisir un prénom';
        }

        if(!values.MERGE2) {
            errors.MERGE2 = 'Veuillez saisir un nom';
        }

        if(!values.MERGE3) {
            errors.MERGE3 = 'Veuillez saisir un type';
        }

        if(!values.MERGE4) {
            errors.MERGE4 = 'Veuillez saisir un pays';
        }

        return errors;
    }
    return {
        validate    
    }
}

export default FormValidation;