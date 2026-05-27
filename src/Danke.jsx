import React, { useEffect } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Danke() {
  const navigate = useNavigate();

  // NEU: Meta Pixel Lead-Tracking feuern, sobald die Danke-Seite lädt
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <div style={{ background: "#111110", minHeight: "100vh", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", fontFamily: "'Outfit', sans-serif", textAlign: "center" }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(200,169,110,0.1)", border: "1px solid #C8A96E", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
        <CheckCircle size={28} color="#C8A96E" />
      </div>
      
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 300, marginBottom: 16 }}>
        Anfrage <em style={{ color: "#C8A96E", fontStyle: "italic" }}>erfolgreich</em> übermittelt!
      </h1>
      
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, maxWidth: 450, lineHeight: 1.6, marginBottom: 40, fontWeight: 300 }}>
        Vielen Dank für dein Vertrauen. Wir prüfen unsere Kapazitäten und senden dir dein maßgeschneidertes Angebot <strong>innerhalb von 6 Stunden</strong> per E-Mail.
      </p>

      <button 
        onClick={() => navigate("/")} 
        style={{ background: "none", border: "1px solid #C8A96E", color: "#C8A96E", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.08em", padding: "12px 24px", transition: "all 0.3s ease" }}
      >
        <ArrowLeft size={14} /> Zurück zur Startseite
      </button>
    </div>
  );
}
