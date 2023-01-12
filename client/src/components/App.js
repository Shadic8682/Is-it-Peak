import logo from '../logo.svg';
import '../App.css';
import Login from './LoginPage';
import Landing from './LandingPage';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Landing/>} />
     </Routes>
    </div>
  );
}

export default App;
