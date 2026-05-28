import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery"; // Pfad angepasst zu /pages
import Danke from "./Danke"; 
import Datenschutz from "./pages/Datenschutz"; // NEU: Pfad exakt auf den pages-Ordner angepasst
import Impressum from "./pages/Impressum"; // Passe den Pfad an, falls deine Ordnerstruktur anders ist

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/danke" element={<Danke />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}
