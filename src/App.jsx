import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./Gallery";
import Danke from "./Danke"; // NEU: Danke-Seite importieren

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/danke" element={<Danke />} /> {/* NEU: Route für Google Ads */}
      </Routes>
    </Router>
  );
}
