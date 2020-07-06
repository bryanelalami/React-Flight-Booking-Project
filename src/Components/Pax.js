import React, { useState } from 'react';

function Pax(props) {

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({});

    const handleDelete = event => {
        event.preventDefault()
        if (props.onDelete) {
            props.onDelete()
        }
    }
    const handleChange = (event) => {
        event.persist();
        console.log(event)

        //On met à jour la valeur de values pour récupérer les valeurs et les traiter
        setValues(values => ({ ...values, [event.target.name]: [event.target.value] }));
        console.log(values);
    }

    const error = (event) => {
        event.preventDefault();
        console.log('toto');

        let errors = {};

        //L'action par défaut (le submit) ne doit pas être prise en compte
        if (event) event.preventDefault();

        //Test si la depart est vide
        if (!values.nom) {
            console.log(values.nom)
            errors.nom = 'Erreur veuillez vérifier le nom '; 
        }

        if (!values.prenom) {
            console.log(values.prenom)
            errors.prenom = 'Erreur veuillez vérifier le prénom '; 
        }

        if (!values.birthdate) {
            console.log(values.birthdate)
            errors.birthdate = 'Erreur veuillez vérifier la date de naissance '; 
        }

        if (!values.passeport) {
            console.log(values.passeport)
            errors.passeport = 'Erreur veuillez vérifier le no de Passeport '; 
        }
        console.log(errors);

        setErrors(errors);
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="form-group col-sm-12 col-md-3">
                <input className="form-control" placeholder="Nom*" type="text" onChange={handleChange} />
                <span className="error">{errors.nom}</span>
            </div>
            <div className="form-group col-sm-12 col-md-3">
                <input className="form-control" placeholder="Prénom*" type="text" onChange={handleChange} />
                <span className="error">{errors.prenom}</span>
            </div>
            <div className="form-group col-sm-12 col-md-3">
                <input className="form-control" placeholder="Date de naissance*" type="date" onChange={handleChange} />
                <span className="error">{errors.birthdate}</span>
            </div>
            <div className="form-group col-sm-12 col-md-2">
                <input className="form-control" placeholder="No passeport*" type="text" onChange={handleChange} />
                <span className="error">{errors.passeport}</span>
            </div>
            <div className="form-group col-sm-12 col-md-1 pt-2">
                <button className=" btn btn-danger " onClick={handleDelete}>X</button>
            </div>
            <div className=" col-lg-3 col-sm-8 form-btn">
                <input type="submit" id="submit" className="submit-btn" value="Rechercher des vols" onClick={error} />
            </div>
        </div>

    )
}

export default Pax;
