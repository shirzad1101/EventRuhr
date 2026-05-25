import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Sucht im Unterordner 'pages' nach Home.jsx
import Gallery from "./Gallery";   // Sucht direkt im 'src'-Ordner nach Gallery.jsx

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
