import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Private from './Components/Private';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Adminproductsmin from './Components/Adminproducts'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container mt-3">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/private" element={<Private />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminproduct" element={<Adminproductsmin />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
