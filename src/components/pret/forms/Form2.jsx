import React from 'react'
import { UserContext } from '../../../AppContext';

const Form2 = () => {

  const { stepCurrent, setstepCurrent, setPretData, pretData } = React.useContext(UserContext);

  return (
    <div className='formulaire2'>
      <div className='bloc1'>
        <div>
          <input
            type="text"
            placeholder='Code postal / Localité'
            onChange={(e) => setPretData({ ...pretData, "localite": e.target.value })}
            value={pretData.localite}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Adresse'
            onChange={(e) => setPretData({ ...pretData, "adresse": e.target.value })}
            value={pretData.adresse}
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Année d'entrée dans votre logement"
            onChange={(e) => setPretData({ ...pretData, "anneEntreeLogement": e.target.value })}
            value={pretData.anneEntreeLogement}
          />
          <span style={{ color: "silver", fontSize: "12px" }}>Année d'entrée dans votre logement</span>
        </div>
      </div>
      <div className='bloc22'>
        <div>
          <select name="" id="" onChange={(e) => setPretData({ ...pretData, "situationLogement": e.target.value })}>
            <option value="">--Situation de logement--</option>
            <option value="Locataire">Locataire</option>
            <option value="Propriétaire avec prêt en cours">Propriétaire avec prêt en cours </option>
            <option value="Logé par l'employeur">Logé par l'employeur</option>
            <option value="Propriétaire">Propriétaire</option>
            <option value="Hôtel">Hôtel</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder='Téléphone portable'
            onChange={(e) => setPretData({ ...pretData, "telephonePortable": e.target.value })}
            value={pretData.telephonePortable}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder='Téléphone professionnel'
            onChange={(e) => setPretData({ ...pretData, "telephoneProfessionnel": e.target.value })}
            value={pretData.telephoneProfessionnel}
          />
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