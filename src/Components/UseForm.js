import { useState, useEffect } from 'react';
import FormValidation from './FormValidation';

const UseForm = () => {
    const [ values, setValues ] = useState({});
    const [ errors, setErrors] = useState({});
    const [ isSubmitting, setIsSubmitting] = useState(false);

    const {
        validate,
    } = FormValidation();

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            alert('validation');
        }
    });

    const handleChange = (event) => {
        event.persist();
        setValues(value =>({ ...values, [event.target.name]:event.target.value}))
    }

    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
}

export default UseForm;