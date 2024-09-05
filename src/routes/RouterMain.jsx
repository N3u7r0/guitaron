import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Ofertas, Nosotros, TodosLosProductos, Guitarras, Bajos, Baterias } from "../pages"
import { NavBar } from "../components/NavBar/NavBar";
export const RouterMain = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/todosLosProductos" element={<TodosLosProductos />} />
        <Route path="/guitarras" element={<Guitarras />} />
        <Route path="/bajos" element={<Bajos />} />
        <Route path="/baterias" element={<Baterias />} />
      </Routes>
    </BrowserRouter>
  )
};
