import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Impressum() {
  const navigate = useNavigate();
  const GOLD = "#C8A96E";

  return (
    <div style={{ background: "#111110", minHeight: "100vh", color: "#fff", padding: "60px 40px", fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Zurück-Button */}
        <button 
          onClick={() => navigate("/")} 
          style={{ background: "none", border: "none", color: GOLD, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.08em", marginBottom: 40, padding: 0 }}
        >
          <ArrowLeft size={14} /> Zurück zur Startseite
        </button>
        
        {/* Titel */}
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 300, marginBottom: 40 }}>
          Impressum
        </h1>

        {/* Inhalt */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, rgba: "rgba(255,255,255,0.7)", lineHeight: "1.8", fontWeight: 300, fontSize: "15px" }}>
          
          <div>
            <h2 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: GOLD, marginBottom: 8, fontFamily: "'Outfit', sans-serif" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p style={{ color: "#fff", fontSize: "18px", fontWeight: 400, fontFamily: "'Cormorant Garamond', serif" }}>
              Sherzad Qadri<br />
              EventRuhr
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: GOLD, marginBottom: 8 }}>
              Kontakt
            </h2>
            <p>
              Hanielstr. 35<br />
              45327 Essen<br />
              Deutschland
            </p>
            <p style={{ marginTop: 12 }}>
              E-Mail: <a href="mailto:shirzad.qadri123@gmail.com" style={{ color: GOLD, textDecoration: "none" }}>shirzad.qadri123@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: GOLD, marginBottom: 8 }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Sherzad Qadri<br />
              Hanielstr. 35<br />
              45327 Essen
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.05)", margin: "20px 0" }} />

          <div>
            <h2 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: GOLD, marginBottom: 8 }}>
              Haftungsausschluss (Disclaimer)
            </h2>
            <h3 style={{ fontSize: "14px", color: "#fff", marginTop: 12, marginBottom: 4 }}>Haftung für Inhalte</h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
            
            <h3 style={{ fontSize: "14px", color: "#fff", marginTop: 16, marginBottom: 4 }}>Urheberrecht</h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
