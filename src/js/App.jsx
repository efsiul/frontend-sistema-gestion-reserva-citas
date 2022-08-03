
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../component/login/Login';
//import { Profile } from '../component/login/Profile';
//import { LogoutButton } from '../component/login/Logout';
import  Enrutador  from '../component/Enrutador'
import '../css/App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../component/home/Home';
import  Nosotros  from '../component/nosotros/Nosotros';
import  Servicios  from '../component/servicios/Servicios';
import  Contacto  from '../component/contacto/Contacto';


export default function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header"> 
        { isAuthenticated ? (
          <>  
            {/* <Profile/> 
            <LogoutButton /> 
             */}
              <BrowserRouter>
                <Routes>

                    <Route index element={<Home/>}></Route>
                    <Route path='nosotros' element={ <Nosotros />}></Route>
                    <Route path='servicios' element={ <Servicios />}></Route>
                    <Route path='contacto' element={<Contacto />}></Route>
          
              </Routes>
          </BrowserRouter>
          </>
        ):(
        <LoginButton />
        )}
      </header>
    </div>
  );
}

