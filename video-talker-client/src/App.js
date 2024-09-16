import { useEffect } from 'react';
import { ConnectionWWS } from './utils/wwsConnection';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';

function App() {
useEffect(() => {
  ConnectionWWS();
},[])

  return (
    <Router>
      <Routes>
        <Route path ='/dashboard' element = {<Dashboard />} />
        <Route path ='/' element = {<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
