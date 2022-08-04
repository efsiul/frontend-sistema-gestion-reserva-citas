//Se mando a App

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Páginas del Sitio Web
import Home from './home/Home';
import  Nosotros  from './nosotros/Nosotros';
import  Servicios  from './servicios/Servicios';
import  Contacto  from './contacto/Contacto';
import App from "../js/App"

const Enrutador = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>}></Route>
          <Route path='nosotros' element={ <Nosotros />}></Route>
          <Route path='servicios' element={ <Servicios />}></Route>
          <Route path='contacto' element={<Contacto />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Enrutador;
