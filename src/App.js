import './App.css';
import Navbar from './Components/Navbar';
// import Home from './Screen/SearchEmp.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import SearchEmp from './Screen/SearchEmp';
import AddEmp from './Screen/AddEmp';
import Home from './Screen/Home';
import EditEmp from './Screen/EditEmp';

function App() {
  return (
    <>
    <Router>
    <Navbar/> 
    <div>
    <Routes>
      <Route exact path='/searchEmp' element={<SearchEmp/>}></Route>
      <Route exact path='/addEmp' element={<AddEmp/>}></Route>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/editEmp' element={<EditEmp/>}></Route>
    </Routes> 
    </div>
    </Router>
    </>
  );
}

export default App;
