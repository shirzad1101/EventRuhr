import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#111110", minHeight: "100vh", color: "#fff", padding: "60px 40px", fontFamily: "'Outfit', sans-serif" }}>
      {/* Zurück-Button */}
      <button 
        onClick={() => navigate("/")} 
        style={{ background: "none", border: "none", color: "#C8A96E", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.08em", marginBottom: 40 }}
      >
        <ArrowLeft size={14} /> Zurück zur Startseite
      </button>
      
      {/* Überschrift */}
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 300, marginBottom: 12 }}>
        Unsere <em style={{ color: "#C8A96E", fontStyle: "italic" }}>Galerie</em>
      </h1>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 40, fontWeight: 300 }}>
        Eindrücke und Highlights der EventRuhr Deluxe Plattformen in Aktion.
      </p>

      {/* ── VIDEO GRID (Videos nebeneinander) ── */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "24px", 
        width: "100%", 
        maxWidth: "1200px", 
        margin: "0 auto" 
      }}>
        
        {/* VIDEO 1 - MIT .mp4 ENDUNG */}
        <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(200,169,110,0.2)", position: "relative", paddingBottom: "177.78%", height: 0 }}>
          <video 
            src="/video1.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* VIDEO 2 - MIT .mp4 ENDUNG */}
        <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(200,169,110,0.2)", position: "relative", paddingBottom: "177.78%", height: 0 }}>
          <video 
            src="/video2.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

      </div>
    </div>
  );
}
