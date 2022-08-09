import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './Components/Navbar/Nav';
import { Home } from './Components/Pages/Home';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';
import { SignIn } from './Components/Pages/SignIn';
import { Login } from './Components/Pages/Login';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
