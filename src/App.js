import './App.css';
import RoutesFree from './Routes/RoutesFree';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { UidContext } from './AppContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './bases/baseUrl';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';
import {getCompteUser} from "./actions/compte.actions"

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  const verifUserConnected = async () => {
    await axios.get(`${baseUrl}/jwtid`, { withCredentials: true })
      .then(resp => {
        setUid(resp.data);
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    verifUserConnected();

    if (uid) {
      dispatch(getUser(uid));
      dispatch(getCompteUser(uid));
    }
  }, [uid])


  console.log(uid)

  return (
    <UidContext.Provider value={uid}>
      <div className=''>
        <RoutesFree />
      </div>
    </UidContext.Provider>
  );
}

export default App;
