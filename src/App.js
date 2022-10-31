import './App.css';
import { BrowserRouter as Router, Routes, Route, useRoutes, useLocation } from 'react-router-dom'
import { userContext } from './Context/userContext';
import { Nav } from './Components/Navbar/Nav';
import { Home } from './Components/Pages/Home/Home';
import { About } from './Components/Pages/About/About';
import { Contact } from './Components/Pages/Contact/Contact';
import { SignUp } from './Components/Pages/SignUp';
import { Login } from './Components/Pages/Login';
import { Footer } from './Components/Footer/Footer';
import { UserListener } from './hook/userListener'
import UserProfile from './Components/UserAccount/UserProfile'
import { NotFound } from './Components/Pages/notFound';
import * as ROUTES from './Components/Route/ROUTES'
import { Dashboard } from './Components/Pages/Dashboard/Dashboard';


function App() {
  const { user } = UserListener()

  console.log('user: ', user ,window.location.pathname)
  return (
    <userContext.Provider value={{ user }}>
      <Router>
        {Object.values(ROUTES).some((p) => p === window.location.pathname) ? <Nav /> : ''}
        <Routes>
          <Route index element={<Home />} />
          <Route path={ROUTES.About} element={<About />} />
          <Route path={ROUTES.Contact} element={<Contact />} />
          <Route path={ROUTES.Sign_Up} element={<SignUp />} />
          <Route path={ROUTES.Login} element={<Login />} />
          <Route path={ROUTES.Dashboard} element={<Dashboard />} />
          <Route path={ROUTES.Profile} element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {Object.values(ROUTES).some((p) => p === window.location.pathname) ? <Footer /> : ""}
      </Router>
    </userContext.Provider>
  );
}

export default App;
