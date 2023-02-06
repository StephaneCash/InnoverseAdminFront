import React from 'react'
import { UserContext } from '../../../AppContext';

const Form2 = () => {

  const { stepCurrent, setstepCurrent } = React.useContext(UserContext);

  return (
    <div className='formulaire2'>
      <div className='bloc1'>
        <div>
          <input type="text" placeholder='Code postal / Localité' />
        </div>
        <div>
          <input type="text" placeholder='Adresse' />
        </div>
        <div>
          <input type="text" placeholder="Année d'entrée dans votre logement" />
        </div>
      </div>
      <div className='bloc22'>
        <div>
          <select name="" id="">
            <option value="">Locataire</option>
            <option value="">Propriétaire avec prêt en cours </option>
            <option value="">Logé par l'employeur</option>
            <option value="">Propriétaire</option>
          </select>
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
      </div>

      <div className='groupButtons'>
        <button onClick={() => setstepCurrent(stepCurrent - 1)}>Retour</button>
        <button onClick={() => setstepCurrent(stepCurrent + 1)}>Suivant</button>
      </div>
    </div>
  )
}

export default Form2