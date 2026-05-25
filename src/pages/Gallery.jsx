import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#111110", minHeight: "100vh", color: "#fff", padding: "60px 40px", fontFamily: "'Outfit', sans-serif" }}>
      <button 
        onClick={() => navigate("/")} 
        style={{ background: "none", border: "none", color: "#C8A96E", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.08em", marginBottom: 40 }}
      >
        <ArrowLeft size={14} /> Zurück zur Startseite
      </button>
      
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 300, marginBottom: 12 }}>
        Unsere <em style={{ color: "#C8A96E", fontStyle: "italic" }}>Galerie</em>
      </h1>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 40, fontWeight: 300 }}>
        Eindrücke und Highlights der EventRuhr Deluxe Plattformen in Aktion.
      </p>

      <div style={{ border: "1px dashed rgba(200,169,110,0.3)", padding: "100px 20px", textAlign: "center", color: "rgba(255,255,255,0.3)", borderRadius: 2 }}>
        [ Hier kommen bald deine Bilder & Videos von den Events rein ]
      </div>
    </div>
  );
}
