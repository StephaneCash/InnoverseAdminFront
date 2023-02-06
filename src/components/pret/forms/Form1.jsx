import React from 'react'
import { UserContext } from '../../../AppContext';
import "./Form.css";

const Form1 = () => {

  const { stepCurrent, setstepCurrent } = React.useContext(UserContext);

  return (
    <div className='formulaire1'>
      <div className='bloc1'>
        <div>
          <select name="" id="">
            <option value="">--Civilité--</option>
            <option value="">Monsieur</option>
            <option value="">Ma demoiselle</option>
            <option value="">Madame</option>
          </select>
        </div>

        <div>
          <input type="text" placeholder='Prénom' />
        </div>
        <div>
          <input type="text" placeholder='Nom' />
        </div>
      </div>

      <div className='bloc2'>
        <div>
          <select name="" id="">
            <option value="">--Situation familiale--</option>
            <option value="">Marié(e)</option>
            <option value="">Célibataire</option>
            <option value="">Divorcé(e)</option>
            <option value="">Veuf/Veuve</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Nombre d'enfants" />
        </div>
        <div>
          <select name="" id="">
            <option value="">--Niveau d'éducation--</option>
            <option value="">Etudes primaires</option>
            <option value="">Etudes secondaires</option>
            <option value="">Divorcé(e)</option>
            <option value="">Veuf/Veuve</option>
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