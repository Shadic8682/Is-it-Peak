import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import Login from './LoginPage';
import Landing from './LandingPage';
import {Route, Routes} from 'react-router-dom'
import Nav from './Nav';

function App() {

  const [currentUser, setCurrentUser] = useState(false)

  return (
    <div className="App">
      <Nav currentUser={currentUser} updateUser={setCurrentUser}/>
     <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/login' element={<Login updateUser={setCurrentUser}/>} />
     </Routes>
    </div>
  );
}

export default App;
