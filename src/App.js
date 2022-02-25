import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";

import Inicio from "./paginas/Inicio";
import Usuario from "./paginas/Usuario";
import Acerca from "./paginas/Acerca";
import NotFound from "./paginas/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuario/:login" element={<Usuario />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
