import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  useLocation,
} from "react-router-dom";
import { userContext } from "./Context/userContext";
import { Nav } from "./Components/Navbar/Nav";
import { Home } from "./Components/Pages/Home/Home";
import { About } from "./Components/Pages/About/About";
import { Contact } from "./Components/Pages/Contact/Contact";
import { SignUp } from "./Components/Pages/SignUp";
import { Login } from "./Components/Pages/Login";
import { Footer } from "./Components/Footer/Footer";
import { NotFound } from "./Components/Pages/notFound";
import { UserListener } from "./hook/userListener";
import UserProfile from "./Components/UserAccount/UserProfile";
import ScrollUp from "./Components/Pages/ScrollUp/ScrollUp";
import * as ROUTES from "./Components/Route/ROUTES";
import { Dashboard } from "./Components/Pages/Dashboard/Dashboard";
import React, { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
// import { SunspotLoader } from "react-awesome-loaders";

import { Admin } from "./Components/Pages/Admin"

function App() {
  const { user } = UserListener();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  // const location = useLocation()
  console.log("user: ", user);
  return (

    <>
      {isLoading ? (
        <Oval
          height={120}
          width={120}
          color="#264653"
          wrapperStyle={{}}
          wrapperClass="Oval"
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}

        />
      //   <SunspotLoader
      //   gradientColors={["#6366F1", "#E0E7FF"]}
      //   shadowColor={"#3730A3"}
      //   desktopSize={"128px"}
      //   mobileSize={"100px"}
      //   className="Oval"
      // />
      ) : (
        <>
          <userContext.Provider value={{ user }}>
            <Router>
              {/* {Object.values(ROUTES).some((p) => p === window.location.pathname) ? <Nav /> : ''} */}
              <Routes>
                <Route index element={<Home />} />
                <Route path={ROUTES.Sign_Up} element={<SignUp />} />
                <Route path={ROUTES.Login} element={<Login />} />
                <Route path={ROUTES.Dashboard} element={<Dashboard />} />
                <Route path={ROUTES.Profile} element={<UserProfile />} />
                <Route path={ROUTES.Admin} element={<Admin />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              {/* {Object.values(ROUTES).some((p) => p === window.location.pathname) ? <Footer /> : ""} */}
            </Router>
            <ScrollUp/>
          </userContext.Provider>
        </>

      )}
    </>
  );
}

export default App;
