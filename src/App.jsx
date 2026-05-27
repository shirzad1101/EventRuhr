import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./Gallery";
import Danke from "./Danke"; 
import Datenschutz from "./Datenschutz"; // NEU: Datenschutz-Seite importieren

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/danke" element={<Danke />} /> {/* Route für Google / Meta Ads Tracking */}
        <Route path="/datenschutz" element={<Datenschutz />} /> {/* NEU: Rechtssichere Route für das Buchungs-Modal */}
      </Routes>
    </Router>
  );
}
