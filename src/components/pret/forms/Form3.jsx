import React from 'react'
import { UserContext } from '../../../AppContext';

const Form3 = () => {

  const { stepCurrent, setstepCurrent } = React.useContext(UserContext);

  return (
    <div className='form3'>
      <div className='bloc1'>
        <input type="text" placeholder='Votre profession' />
        <input type="text" placeholder='Nom de votre entreprise' />
      </div>
      <div className='bloc2'>
        <input type="text" placeholder='Votre poste' />
        <input type="text" placeholder="Adresse de l'entreprise" />
      </div>

      <div className='groupButtons'>
        <button onClick={() => setstepCurrent(stepCurrent - 1)}>Retour</button>
        <button onClick={() => setstepCurrent(stepCurrent + 1)}>Suivant</button>
      </div>
    </div>
  )
}

export default Form3