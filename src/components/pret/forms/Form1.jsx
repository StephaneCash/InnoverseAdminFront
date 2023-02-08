import React from 'react'
import { UserContext } from '../../../AppContext';
import "./Form.css";

const Form1 = () => {

  const { stepCurrent, setstepCurrent, setPretData, pretData } = React.useContext(UserContext);

  return (
    <div className='formulaire1'>
      <div className='bloc1'>
        <div>
          <select name="" id="" onChange={(e) => setPretData({ ...pretData, "civilite": e.target.value })}>
            <option value="">--Civilité--</option>
            <option value="Monsieur">Monsieur</option>
            <option value="Ma demoiselle">Ma demoiselle</option>
            <option value="Madame">Madame</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder='Prénom'
            value={pretData.prenom}
            onChange={(e) => setPretData({ ...pretData, "prenom": e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Nom'
            value={pretData.nom}
            onChange={(e) => setPretData({ ...pretData, "nom": e.target.value })}
          />
        </div>
      </div>

      <div className='bloc2'>
        <div>
          <select name="" id="" onChange={(e) => setPretData({ ...pretData, "situationFamiliale": e.target.value })}>
            <option value="">--Situation familiale--</option>
            <option value="Marié(e)">Marié(e)</option>
            <option value="Célibataire">Célibataire</option>
            <option value="Divorcé(e)">Divorcé(e)</option>
            <option value="Veuf/Veuve">Veuf/Veuve</option>
          </select>
        </div>
        <div>
          <input type="number"
            placeholder="Nombre d'enfants"
            value={pretData.nbreEnfants}
            onChange={(e) => setPretData({ ...pretData, "nbreEnfants": e.target.value })}
          />
        </div>
        <div>
          <select name="" id="" onChange={(e) => setPretData({ ...pretData, "niveauEducation": e.target.value })}>
            <option value="">--Niveau d'éducation--</option>
            <option value="Etudes primaires">Etudes primaires</option>
            <option value="Etudes secondaires">Etudes secondaires</option>
            <option value="Etudes humanitaires">Etudes humanitaires</option>
            <option value="Etudes universitaires">Etudes universitaires</option>
            <option value="Doctorat">Doctorat</option>
          </select>
        </div>
      </div>

      <div className='buttonSuivantBloc'>
        <button
          style={{ float: "right" }}
          className="btnSuivant"
          onClick={() => setstepCurrent(stepCurrent + 1)}
        >
          Suivant
        </button>
      </div>
    </div>
  )
}

export default Form1