import React, { useState } from 'react';
import Countries from './Countries';
import Pax from './Pax';


function BookingForm() {

    let today = new Date().toISOString().slice(0, 10);

    const [voyageurLastId, setVoyageurLastId] = useState({});
    const [listeVoyageurs, setListeVoyageurs] = useState([]);
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({});
    const [voyageType, setVoyageType] = useState(true);
    const [recherche, setRecherche] = useState(false);
    const [dateDepart, setdateDepart] = useState(today);

    const getNextId = () => {
        const id = voyageurLastId;
        setVoyageurLastId(id + 1)
        return id;
    }

    const handleAddPax = (event, count) => {
        event.preventDefault();
        if (!recherche) setRecherche(true);
        const nouveauVoyageur = {
            id: getNextId(),
        };
        const nouveauListeVoyageurs = [...listeVoyageurs];
        nouveauListeVoyageurs.push(nouveauVoyageur);
        setListeVoyageurs(nouveauListeVoyageurs);
    }


    const handleDeleteVoyageur = i => () => {
        const voyageursCopy = [...listeVoyageurs]
        console.log("delete", i)
        voyageursCopy.splice(i, 1)
        setListeVoyageurs(voyageursCopy)
    }

    const voyageursDiv = listeVoyageurs.map((voyageur, i) => {
        return <Pax key={voyageur.id} onDelete={handleDeleteVoyageur(i)} />
    })

    const handleSubmit = (event) => {

        event.preventDefault();

        let errors = {};

        //L'action par défaut (le submit) ne doit pas être prise en compte
        if (event) event.preventDefault();

        //Test si la depart est vide
        if (!values.depart) {
            console.log(values.depart)
            errors.depart = 'Erreur veuillez vérifier le depart ';
        }

        //Test si le nombre de retour est vide 
        if (!values.retour) {
            errors.retour = 'Erreur veuillez vérifier le retour';
        }

        //Test si le nombre de voyageur est vide 
        if (!values.dateDepart) {
            console.log(values)
            console.log(values.dateDepart)
            errors.dateDepart = 'Erreur veuillez vérifier le date de retour';
        }

        if (!values.dateRetour) {
            errors.dateRetour = 'Erreur veuillez vérifier le retour';
        }

        if (!values.addPax) {
            errors.addPax = 'Erreur veuillez ajouter un passager';
        }

        if (!values.addPax) {
            errors.addPax = 'Erreur veuillez ajouter un prénom';
        }

        if (!values.addPax) {
            errors.addPax = 'Erreur veuillez ajouter un nom';
        }

        if (!values.addPax) {
            errors.addPax = 'Erreur veuillez ajouter une date de naissance';
        }

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

        



        //On met à jour la valeurs de errors
        //pour rendre nos erreurs accessibles dans le formulaire pour l'affichage dans les spans
        setErrors(errors);

        //Si notre objet ne contient pas d'erreur on peut le valider 
        if (Object.keys(errors).length === 0) {
            alert('Le formulaire est validé, nous construisons votre maison');
        }

    }

    //On "gère" le changement : dès qu'on saisie un caractère dans un champ on passe par cette fonction
    const handleChange = (event) => {
        if(event.target.name === 'dateDepart') setdateDepart(event.target.value)
        event.persist();
        console.log(event)

        //On met à jour la valeur de values pour récupérer les valeurs et les traiter
        setValues(values => ({ ...values, [event.target.name]: [event.target.value] }));
        console.log(values);
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST">
                <div className="section">
                    <div className="section-center">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="booking-form col-lg-10 col-sm-10">
                                    <div id="typeVoyage" className="form-group">
                                        <div className="form-checkbox">
                                            <label htmlFor="roundtrip">
                                                <input defaultChecked={voyageType ? true : false} id="roundtrip" type="radio" name="flight-type" onClick={() => {setVoyageType(true)}} />
                                                <span></span>Aller-Retour
									      </label>
                                            <label htmlFor="one-way">
                                                <input id="one-way" type="radio" name="flight-type" onClick={() => {setVoyageType(false)}} />
                                                <span></span>Aller-Simple
									      </label>
                                        </div>
                                    </div>
                                    {/* Aéroports de départ et retour */}
                                    <div className="row d-flex justify-content-center" id="voyage">
                                        <div className="col-lg-4 col-sm-5">
                                            <div className="form-group">
                                                <span className="form-label">Origine</span>
                                                <select className="form-control" onChange={handleChange}>
                                                    <Countries name="depart" id="depart" />
                                                </select>
                                                <span className="error">{errors.depart}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-5">
                                            <div className="form-group">
                                                <span className="form-label">Destination</span>
                                                <select className="form-control text-center" onChange={handleChange}>
                                                    <Countries name="retour" id="retour" />
                                                </select>
                                                <span className="error">{errors.retour}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Date de départ et retour */}
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-lg-3 col-sm-5">
                                            <div className="form-group">
                                                <span className="form-label">Date de départ</span>
                                                <input min={today} value={values.dateDepart} name="dateDepart" id="listingDateFrom" className="form-control" type="date" onChange={handleChange} />
                                                <span className="error">{errors.dateDepart}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-5">
                                            {voyageType ?
                                                <div className="form-group">
                                                    <span name="dateRetour" className="form-label">Date de retour</span>
                                                    <input min={dateDepart} value={values.dateRetour} id="listingDateTo" className="form-control" type="date" onChange={handleChange} />
                                                    <span className="error">{errors.dateRetour}</span>
                                                </div> : null
                                            }

                                        </div>
                                    </div>
                                    {/* Bouton ajouter un passager */}
                                    <div className=" d-flex justify-content-around">
                                        <div className="form-btn">
                                            <div className="py-3">
                                                <button onClick={handleAddPax} name="addPax" className="btn btn-secondary">Ajouter un passager</button>
                                                <span className="error">{errors.addPax}</span>
                                            </div>
                                            {/* Formulaire ajout voyageur */}
                                            <div className="form-group my-2">{voyageursDiv}</div>
                                        </div>
                                    </div>
                                    {/* Bouton valider */}
                                    <div className="col-lg-12 d-flex justify-content-center">
                                        {recherche ?
                                            <div className=" col-lg-3 col-sm-8 form-btn">
                                            <input type="submit" id="submit" className="submit-btn" value="Rechercher des vols" />
                                        </div> : null
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BookingForm;