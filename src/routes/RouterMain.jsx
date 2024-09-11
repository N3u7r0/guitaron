import { Routes, Route } from "react-router-dom";
import {
  Home,
  Ofertas,
  Nosotros,
  TodosLosProductos,
  Guitarras,
  Bajos,
  Baterias,
  Item,
} from "../pages";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/todosLosProductos" element={<TodosLosProductos />} />
      <Route path="/guitarras" element={<Guitarras />} />
      <Route path="/bajos" element={<Bajos />} />
      <Route path="/baterias" element={<Baterias />} />
      <Route path="/item/:id" element={<Item />} />
    </Routes>
  );
};
