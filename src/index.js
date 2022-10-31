import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {DbContext}  from './Context/DBContext';
import {db , auth} from './DB/firebase'
// import { NotFound } from './Components/Pages/notFound';
// import { BrowserRouter as Router } from 'react-router-dom';
// import {Routes,Route} from 'react-router-dom';
// import Login from './Components/Pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 
    <DbContext.Provider value = {{db , auth}}>
        <App/>
      {/* <Router>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}

    

     </DbContext.Provider>
   

);


