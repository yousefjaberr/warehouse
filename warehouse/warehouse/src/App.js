import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Router from './components/router/router';
// import NavBar from './components/admin/Navbar';

function App() {
  return (
    <BrowserRouter>

     <Router/>
    </BrowserRouter>    
  );
}
export default App;
