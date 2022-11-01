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

import * as ROUTES from "./Components/Route/ROUTES";
import { Dashboard } from "./Components/Pages/Dashboard/Dashboard";
import React, { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

function App() {
  const { user } = UserListener();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  // const location = useLocation()
  console.log("user: ", user);
  return (
    <>
      {isLoading ? (
        <Oval
          height={100}
          width={100}
          color="#28877f"
          wrapperStyle={{}}
          wrapperClass="Oval"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <>
          {" "}
          <userContext.Provider value={{ user }}>
            <Router>
              {Object.values(ROUTES).some(
                (p) => p === window.location.pathname
              ) ? (
                <Nav />
              ) : (
                ""
              )}

              <Routes>
                <Route index element={<Home />} />
                {/* <Route path={ROUTES.About} element={<About />} /> */}
                {/* <Route path={ROUTES.Contact} element={<Contact />} /> */}
                <Route path={ROUTES.Sign_Up} element={<SignUp />} />
                <Route path={ROUTES.Login} element={<Login />} />
                <Route path={ROUTES.Dashboard} element={<Dashboard />} />
                <Route path={ROUTES.Profile} element={<UserProfile />} />
              </Routes>
              {Object.values(ROUTES).some(
                (p) => p === window.location.pathname
              ) ? (
                <Footer />
              ) : (
                ""
              )}

              <Routes>
                <Route path="*" element={<NotFound />} />

                <Route index element="/" />

                <Route path={ROUTES.Login} />
              </Routes>
            </Router>
          </userContext.Provider>
        </>
      )}
    </>
  );
}

export default App;
