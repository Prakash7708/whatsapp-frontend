import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Userslogin from './components/Login/Userslogin';
import Register from './components/Login/Register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Userslogin/>} />
      <Route path="/home/:id" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
