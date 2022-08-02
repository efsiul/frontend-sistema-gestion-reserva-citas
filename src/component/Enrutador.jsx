import { BrowserRouter, Routes, Route } from "react-router-dom";
// Páginas del Sitio Web
import Home from './home/Home';
import  Nosotros  from './nosotros/Nosotros';
import  Servicios  from './servicios/Servicios';
import  Contacto  from './contacto/Contacto';
import  Menu  from './menu/Menu';

const Enrutador = () => {
  
  return (

    <BrowserRouter>
      <Menu /> 
      <Routes>
      {/* Páginas */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/nosotros' element={ <Nosotros />}></Route>
        <Route path='/servicios' element={ <Servicios />}></Route>
        <Route path='/contacto' element={ <Contacto />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default Enrutador;