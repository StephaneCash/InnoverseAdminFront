import './App.css';
import Dashboard from './components/Dashbord/Dashboard';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <div className='appGlass'>
        <Sidebar />
        <Dashboard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
